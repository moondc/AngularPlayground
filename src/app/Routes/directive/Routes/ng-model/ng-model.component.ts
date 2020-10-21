import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {

  constructor() { }
  exampleOne: string = "";
  exampleTwo: string = "";
  ngOnInit(): void {
  }

}
