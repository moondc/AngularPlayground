import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }
  items: Array<string> = ['one','two','three'];
  itemsTwo: Array<string> = ['a','b','c'];
  ngOnInit(): void {
  }

  trackByItems(index: number, item: string): string { return item;}
}
