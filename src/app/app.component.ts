import { Component, OnInit } from '@angular/core';
import { AppStorageService } from './app.storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'twitter-challenge-app';
  tableConfig = {
    items: 10,
    skin: '',
    date_range: []
  };

  constructor(
    private storage: AppStorageService
  ) { }

  ngOnInit() {
    const config = this.storage.getItem('config');
    if (config) {
      this.tableConfig = config;
    } else {
      this.storage.setItem('config', this.tableConfig);
    }
  }

  changeConfig(event) {
    this.tableConfig = event;
    this.storage.setItem('config', this.tableConfig);
  }
}
