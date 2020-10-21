import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-statements',
  templateUrl: './template-statements.component.html',
  styleUrls: ['./template-statements.component.css']
})
export class TemplateStatementsComponent implements OnInit {

  a: string = "This is a test";
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteA(): void {
    this.a = "";
  }  

}
