import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkAttendenceComponent } from './mark-attendence/mark-attendence.component';
import { ViewAttendenceComponent } from './view-attendence/view-attendence.component';
import { AttendenceRoutingModules } from './attendence.routing';



@NgModule({
  declarations: [
    MarkAttendenceComponent,
    ViewAttendenceComponent
  ],
  imports: [
    CommonModule,
    AttendenceRoutingModules
  ]
})
export class AttendenceModule { }
