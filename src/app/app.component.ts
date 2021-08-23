import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userData: any = {
    userEmail: "string",
    Auth: false

  }

  //Auth: string;

  constructor(
    private as: AuthService
  ) { }

  ngOnInit(): void {
    this.userData = this.as.getUserData();
  }
}
