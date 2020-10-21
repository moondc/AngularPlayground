import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  isVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

}
