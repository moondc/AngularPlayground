import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  constructor() { }
  turnBlue: boolean = false;
  blueIt(): void {
    this.turnBlue = !this.turnBlue;;
  }
  ngOnInit(): void {
  }


  customClasses: any = {};
  randomizeClasses(): void {
    this.customClasses = {
      blue: Math.random() > .5 ? true:false,
      border: Math.random() > .5 ? true:false,
      width: Math.random() > .5 ? true:false
    }
  }

}
