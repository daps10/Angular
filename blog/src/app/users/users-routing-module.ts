import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { LoginComponent } from './login/login.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SignupComponent } from './signup/signup.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TodosComponent } from './todos/todos.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
        { path: "login", component:LoginComponent },
        { path: 'list', component: UserListComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'userDetails/:id', component: UserDetailsComponent },
        { path: 'todos', component: TodosComponent },
        { path: 'formExample', component: FormDemoComponent },
        { path: 'styleBinding', component: StyleBindingComponent },
        { path: 'pipeExample', component: PipeDemoComponent },
        { path: 'editProfile', component: EditProfileComponent },
        { path: '**',component:PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
