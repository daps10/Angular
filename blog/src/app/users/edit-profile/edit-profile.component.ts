import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editProfile = new FormGroup({
    email:new FormControl('daps'),
    password:new FormControl('daps')
  })

  collectionData(){
    console.log(this.editProfile.value)
  }
}
