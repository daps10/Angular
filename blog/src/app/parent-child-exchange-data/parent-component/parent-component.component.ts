import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  selectedName="";
  selectedEmail="";
  selectedUsername="";
  data = {
    name:"daps",
    age : 26
  };
  userData = [
    {
      name:"daps",
      email : "daps@yahoo.com",
      username:"@daps",
      phone:"09898989822",
      gender : "Male"
    },
    {
      name:"sheena",
      email : "sheena@yahoo.com",
      username:"@sheena",
      phone:"09878989822",
      gender : "Female"
    },
    {
      name:"kunj",
      email : "kunj@yahoo.com",
      username:"@kunj",
      phone:"09889899822",
      gender : "Male"
    }
  ];

  parentComponent(data: any){
    this.selectedName = data.name;
    this.selectedEmail = data.email;
    this.selectedUsername = data.username;
  }
}
