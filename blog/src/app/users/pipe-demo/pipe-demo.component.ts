import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent  {

  constructor() { }

  // Pipe params
  name = "daps";
  today = Date.now();
  currencyAmount = 10;
  pi = "3.142"
  sliceNumber = "abcdefghij"
}
