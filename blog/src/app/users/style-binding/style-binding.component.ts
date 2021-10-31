import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Dynamic property and onclick function to change the property.
  color = "red";  
  updateColor(){
    this.color="orange";
  }

  // conditional approach
  err = true;
}
