import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-syntax',
  templateUrl: './binding-syntax.component.html',
  styleUrls: ['./binding-syntax.component.css']
})
export class BindingSyntaxComponent implements OnInit {
  disabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  Enable(): void {
    this.disabled = false;
  }
  Disable(): void {
    this.disabled = true;
  }
}
