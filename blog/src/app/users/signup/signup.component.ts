import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   
  constructor() { }

  ngOnInit(): void {
  }

  yourName ="john doe"
  //  onclick call function .
  getName(name: any){
    console.log("User name is ::"+name)
  }

  // my event
  myEvent (params:any) {
    console.log(params)
  }
  
  // text box values 
  currentVal = "";
  getVal (val : any) {
    // this.currentVal = val.target.value;
    // console.log(val.target.value)

    this.currentVal = val;
    
  }
}
