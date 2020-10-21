import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }
  item:string;
  arr: Array<string> = ["1","2","3"];
  ngOnInit(): void {
  }
  onClick(): void {
    this.item = this.arr[Math.floor(Math.random() * this.arr.length)]
  }

}
