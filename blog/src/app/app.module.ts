import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { ParentChildExchangeDataModule } from './parent-child-exchange-data/parent-child-exchange-data.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    SharedModule,
    ParentChildExchangeDataModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
