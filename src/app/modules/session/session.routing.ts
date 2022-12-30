import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSessionComponent } from './add-session/add-session.component';
import { ManageSessionComponent } from './manage-session/manage-session.component';

const routes: Routes = [
  {
    path: 'add-session',
    component:AddSessionComponent   
  },
  {
    path: 'manage-session',
    component:ManageSessionComponent   
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesssionRoutingModules{}
