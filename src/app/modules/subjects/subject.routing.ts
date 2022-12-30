import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ManageSubjectComponent } from './manage-subject/manage-subject.component';

const routes: Routes = [
  {
    path: 'add-subject',
    component:AddSubjectComponent   
  },
  {
    path: 'manage-subject',
    component:ManageSubjectComponent   
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectRoutingModules{}
