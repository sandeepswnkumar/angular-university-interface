import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcenterComponent } from './addcenter/addcenter.component';
import { ManagecetnerComponent } from './managecetner/managecetner.component';

const routes: Routes = [
  {
    path: 'add-center',
    component:AddcenterComponent   
  },
  {
    path: 'manage-center',
    component:ManagecetnerComponent   
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudycenterRoutingModule {}
