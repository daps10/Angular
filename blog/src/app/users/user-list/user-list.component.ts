import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  } 

  userList = [
    {
      id:1,
      name:"daps",
      age : 26,
      email :'daps@yahoo.com'
    },
    {
      id:2,
      name:"shrey",
      age : 21,
      email :'shrey@yahoo.com'
    },
    {
      id:3,
      name:"sheena",
      age : 22,
      email :'sheena@yahoo.com'
    },
    {
      id:4,
      name:"kunj",
      age : 25,
      email :'kunj@yahoo.com'
    },
    {
      id:5,
      name:"Dhruv",
      age : 22,
      email :'dhruv@yahoo.com'
    },
    {
      id:6,
      name:"Nick",
      age : 25,
      email :'nick@yahoo.com'
    }
  ];

  // Pass data to details page
  onSelect(user: any){
    const userId = user ? user.id : null;
    this.router.navigate(['/userDetails', userId]);
  }
}
