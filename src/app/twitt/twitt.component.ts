import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twitt',
  templateUrl: './twitt.component.html',
  styleUrls: ['./twitt.component.css']
})
export class TwittComponent implements OnInit {

  @Input() twitt: any;

  constructor() { }

  ngOnInit() {
  }

}
