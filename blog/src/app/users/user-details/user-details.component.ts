import { Component, OnInit } from '@angular/core';
// TO read the parameter we can use the activated route
import { ActivatedRoute } from '@angular/router';

import { dataType } from '../../app.model'

// Create interface to validate object data
// interface dataType{
//   name : string,
//   age : number,
//   isLogin:boolean,
//   hobbies:string[]
// }

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  public userId: any ;
  // Inject ActivateRoute
  constructor(private activatedRoute:ActivatedRoute) { 
    const Id = this.activatedRoute.snapshot.paramMap.get("id");
    this.userId = Id
  }

  getData(){
    // For using above interface using the data:interfaceName
    const data:dataType = {
      name:"Daps",
      age : 26,
      isLogin:true,
      hobbies:["football"]
    }
    return data
  }

  ngOnInit(): void {

  }

}
