import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StyleBindingComponent } from './style-binding/style-binding.component';

import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TodosComponent } from './todos/todos.component';
import { AppRoutingModule } from '../app-routing.module';
import { UsersRoutingModule } from './users-routing-module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FormDemoComponent,
    StyleBindingComponent,
    PipeDemoComponent,
    UserListComponent,
    UserDetailsComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    UsersRoutingModule
  ],
  exports : [
    LoginComponent,
    SignupComponent,
    FormDemoComponent,
    StyleBindingComponent,
    PipeDemoComponent
  ]
})
export class UsersModule { }
