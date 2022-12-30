import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSessionComponent } from './add-session/add-session.component';
import { ManageSessionComponent } from './manage-session/manage-session.component';
import { SesssionRoutingModules } from './session.routing';



@NgModule({
  declarations: [
    AddSessionComponent,
    ManageSessionComponent
  ],
  imports: [
    CommonModule,
    SesssionRoutingModules
  ]
})
export class SessionModule { }
