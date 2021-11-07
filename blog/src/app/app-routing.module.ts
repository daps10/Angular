import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  // Alternate way
  // {path : "", redirectTo:"/LoginComponent", pathMatch:"prefix"} // Only last value match and gives result.
  // {path : "", redirectTo:"/LoginComponent", pathMatch:"full"} // to check full routing
  // { path: '**',component:PageNotFoundComponent }

  // For lazy loading load the component like bellow way.
  // One time only one object created 
  {
    path :'lazy', loadChildren:() => import('./lazy-loading/lazy-loading.module')
    .then(mode=>mode.LazyLoadingModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }