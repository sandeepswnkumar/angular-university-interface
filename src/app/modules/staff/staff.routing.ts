import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';

const routes: Routes = [
  {
    path: 'add-staff',
    component:AddStaffComponent   
  },
  {
    path: 'manage-staff',
    component:ManageStaffComponent   
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModules{}
