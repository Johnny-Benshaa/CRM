import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle: string;
  pageIcon: string;
  pageDescription: string;
  email: string;
  password: string;

  constructor(
    private as: AuthService
  ) { }

  ngOnInit(): void {
    this.pageTitle = "Login";
    this.pageIcon = "fas fa-lock-open";
    this.pageDescription = "Please log in to access our system";
  }
  onSubmit(data) {
    if (data.valid) {
      console.log(data.value.email);
      console.log(data.value.password);
      this.as.login(data.value.email, data.value.password)
    }
  }
}
