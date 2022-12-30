import { Component, OnInit } from '@angular/core';
import { childRoutes } from '../../child-routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  subject = false;
  course = false;
  staff = false;
  session = false;
  attendence = false;
  studycenter = false;
  routes = childRoutes;
  
  constructor() {}

  ngOnInit() {}
}
