import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';

const routes: Routes = [
  {
    path: 'add-course',
    component:AddCourseComponent   
  },
  {
    path: 'manage-course',
    component:ManageCourseComponent   
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModules{}
