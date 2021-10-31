import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FormDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports : [
    LoginComponent,
    SignupComponent,
    FormDemoComponent
  ]
})
export class UsersModule { }
