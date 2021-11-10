import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  constructor() { }

  formDemoForm! : FormGroup;
  ngOnInit(): void {

    // Reactive forms
    this.formDemoForm = new FormGroup({      // Form group always takes an object
      email:new FormControl(null,Validators.required),
      password : new FormControl(null)
    })
    
    
  }

  get email(){ return this.formDemoForm.get("email")  as FormControl; }

}
