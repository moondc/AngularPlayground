import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  size: number | string = 12;

  dec() { this.resize(-1); }
  inc() { this.resize(1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
  }

}
