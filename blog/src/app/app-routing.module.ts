import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ProfileComponent } from './admin/profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormDemoComponent } from './users/form-demo/form-demo.component';
import { LoginComponent } from './users/login/login.component';
import { PipeDemoComponent } from './users/pipe-demo/pipe-demo.component';
import { SignupComponent } from './users/signup/signup.component';
import { StyleBindingComponent } from './users/style-binding/style-binding.component';
import { TodosComponent } from './users/todos/todos.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  // Alternate way
  // {path : "", redirectTo:"/LoginComponent", pathMatch:"prefix"} // Only last value match and gives result.
  // {path : "", redirectTo:"/LoginComponent", pathMatch:"full"} // to check full routing
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UserListComponent },
  { path: 'userDetails/:id', component: UserDetailsComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'formExample', component: FormDemoComponent },
  { path: 'styleBinding', component: StyleBindingComponent },
  { path: 'pipeExample', component: PipeDemoComponent },
  // { path: '**',component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }