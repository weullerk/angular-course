import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  showInfo = false;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleInfo() {
    this.showInfo = !this.showInfo;
    this.logs.push(new Date());  
  }

}
