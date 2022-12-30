import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { childRoutes } from './child-routes';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'studycenter',
        loadChildren: () =>
          import('./../modules/studycenter/studycenter.module').then((m) => m.StudycenterModule),
      },
      {
        path: 'subject',
        loadChildren: () =>
          import('./../modules/subjects/subjects.module').then((m) => m.SubjectsModule),
      },
      {
        path: 'course',
        loadChildren: () =>
          import('./../modules/courses/courses.module').then((m) => m.CoursesModule),
      },
      {
        path: 'staff',
        loadChildren: () =>
          import('./../modules/staff/staff.module').then((m) => m.StaffModule),
      },
      {
        path: 'session',
        loadChildren: () =>
          import('./../modules/session/session.module').then((m) => m.SessionModule),
      },
      {
        path: 'attendence',
        loadChildren: () =>
          import('./../modules/attendence/attendence.module').then((m) => m.AttendenceModule),
      },
      
      ...childRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
