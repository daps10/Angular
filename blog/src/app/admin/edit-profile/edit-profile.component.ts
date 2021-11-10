import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData = {
    email : "daps@yahoo.com",
    password : "123456",
    address : "xyz",
    phone : "1234567890"
  }
}
