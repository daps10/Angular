import { Component, OnInit } from '@angular/core';

// To import the dummy service.
import { DummyServicesService } from 'src/app/dummy-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // inject dummy service in the constructor so we can use it.
  name = "";
  constructor(private data:DummyServicesService) { 
    let category = this.data.getCategoryData();
    this.name = category.name;
  }

  ngOnInit(): void {
  }
  // name = "daps";

  // isDisable = true;
  // toggleEvent(){
  //   this.isDisable = false;
  // }

  // If block
  // show="green"

  // Switch block
  // color = "green"

  // Define array for forloop
  // data = ["daps","shrey","kunj","sheena"];

  userData = [
    {
      name:"daps",
      age : 26,
      email :'daps@yahoo.com'
    },
    {
      name:"shrey",
      age : 21,
      email :'shrey@yahoo.com'
    },
    {
      name:"sheena",
      age : 22,
      email :'sheena@yahoo.com'
    },
    {
      name:"kunj",
      age : 25,
      email :'kunj@yahoo.com'
    }
  ]
}
