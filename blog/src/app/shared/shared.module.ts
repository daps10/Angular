import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
