import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkAttendenceComponent } from './mark-attendence/mark-attendence.component';
import { ViewAttendenceComponent } from './view-attendence/view-attendence.component';

const routes: Routes = [
  {
    path: 'mark-attendence',
    component:MarkAttendenceComponent   
  },
  {
    path: 'view-attendence',
    component:ViewAttendenceComponent   
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendenceRoutingModules{}
