import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() inputData: any;
  @Input() userData: any;

  @Output() parentComponent:EventEmitter<any>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.userData)
  }

  deleteRow(data:any){
    this.parentComponent.emit(data);
  }
}
