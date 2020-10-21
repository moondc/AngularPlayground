import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-expression-operators',
  templateUrl: './template-expression-operators.component.html',
  styleUrls: ['./template-expression-operators.component.css']
})
export class TemplateExpressionOperatorsComponent implements OnInit {

  word: string = 'bob-omb';
  constructor() { }
  item: { name: string, value: string } = { name: "Ted", value: "Worthless" };
  deepItem: { item: { name: string, count: string } } = { item: { name: "DeepTed", count: null } };
  ngOnInit(): void {
  }

}
