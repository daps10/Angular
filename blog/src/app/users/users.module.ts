import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StyleBindingComponent } from './style-binding/style-binding.component';

import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FormDemoComponent,
    StyleBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgbModule,
    MatButtonModule,
    MatInputModule
  ],
  exports : [
    LoginComponent,
    SignupComponent,
    FormDemoComponent,
    StyleBindingComponent
  ]
})
export class UsersModule { }
