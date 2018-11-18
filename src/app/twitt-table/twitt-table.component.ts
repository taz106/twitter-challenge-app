import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../app.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-twitt-table',
  templateUrl: './twitt-table.component.html',
  styleUrls: ['./twitt-table.component.css']
})
export class TwittTableComponent implements OnInit, OnChanges {

  @Input('config') config: any;

  constructor(
    private service: AppService
  ) { }

  // original twitts fetched from api and arranged in a specific order
  twitts = [];

  // twitts to be rendered and filtered on UI
  renderedTwitts = [];
  columns: string[] = ['makeschool', 'newsycombinator', 'ycombinator'];
  displayTable = false;
  source: number;

  ngOnInit() {
    this.getAllTwitts();
  }

  getAllTwitts() {
    this.displayTable = false;
    forkJoin(
      this.service.getTwitts('makeschool'),
      this.service.getTwitts('newsycombinator'),
      this.service.getTwitts('ycombinator')
    ).subscribe(res => {
      this.arrangeResponse(res);
      this.configTwitts();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.configTwitts();
  }

  arrangeResponse(data) {
    for (let index = 0; index < data[0].length; index++) {
      const twitt = {
        makeschool: data[0][index],
        newsycombinator: data[1][index],
        ycombinator: data[2][index]
      };
      this.twitts.push(twitt);
    }
    this.configTwitts();
    this.displayTable = true;
  }

  configTwitts() {
    this.renderedTwitts = [];
    if (this.config.date_range.length) {
      this.renderedTwitts = this.dateFilter();

      if (this.config.items) {
        this.renderedTwitts = this.itemFilter(this.renderedTwitts);
      }
    } else {
      if (this.config.items) {
        this.renderedTwitts = this.itemFilter(this.twitts);
      }
    }
  }

  dateFilter() {
    const fromDate = new Date(this.config.date_range[0]);
    const toDate = new Date(this.config.date_range[1]);
    const filteredTwitts = [];
    for (let index = 0; index < this.twitts.length; index++) {
      const twitt = this.twitts[index];
      const filteredTwitt = {};

      const mkSdate = new Date(twitt.makeschool.created_at);
      const newsycdate = new Date(twitt.newsycombinator.created_at);
      const ycdate = new Date(twitt.ycombinator.created_at);

      if (mkSdate >= fromDate && mkSdate <= toDate) {
        filteredTwitt['makeschool'] = twitt.makeschool;
      } else {
        filteredTwitt['makeschool'] = null;
      }

      if (newsycdate >= fromDate && newsycdate <= toDate) {
        filteredTwitt['newsycombinator'] = twitt.newsycombinator;
      } else {
        filteredTwitt['newsycombinator'] = null;
      }

      if (ycdate >= fromDate && ycdate <= toDate) {
        filteredTwitt['ycombinator'] = twitt.ycombinator;
      } else {
        filteredTwitt['ycombinator'] = null;
      }

      filteredTwitts.push(filteredTwitt);
    }
    return filteredTwitts;
  }

  itemFilter(data) {
    return data.filter((val, index) => index < this.config.items);
  }

  onDrag(event) {
    this.source = event.target.id;
  }

  allowDrop(event) {
    event.preventDefault();
  }

  onDrop(event) {
    event.preventDefault();
    const sourceItem = this.columns[this.source];
    const dest = event.target.id;
    this.columns.splice(this.source, 1);
    this.columns.splice(dest, 0, sourceItem);
  }

}
