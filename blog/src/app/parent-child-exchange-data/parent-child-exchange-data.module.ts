import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SharedModule } from '../shared/shared.module';
import { ParentComponentComponent } from './parent-component/parent-component.component';


@NgModule({
  declarations: [
    ChildComponentComponent,
    ParentComponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    ChildComponentComponent,
    ParentComponentComponent
  ]
})
export class ParentChildExchangeDataModule { }
