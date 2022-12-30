import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Roles {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  roles: Roles[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'center', viewValue: 'Center'},
    {value: 'student', viewValue: 'Student'},
  ];

  constructor(private router: Router) {}
  
  ngOnInit() {}
  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
  }
}
