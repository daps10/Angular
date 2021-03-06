import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  {
    path: 'admin',
    children: [
      { path:"login", component:LoginComponent },
      { path:"profile", component:ProfileComponent },
      { path: '**',component:PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
