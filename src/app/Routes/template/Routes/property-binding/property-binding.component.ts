import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  imageSource: string = "https://www.dictionary.com/e/wp-content/uploads/2018/03/This-is-Fine-300x300.jpg";
  classes: string = "myClass";
  childProp: string = '9';
  constructor() { }

  ngOnInit(): void {
  }

}
