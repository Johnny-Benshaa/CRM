import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  pageTitle: string;
  pageIcon: string;
  pageDescription: string;


  constructor() { }

  ngOnInit(): void {
    this.pageTitle = "Page not found";
    this.pageIcon = "fas fa-exclamation-circle";
    this.pageDescription = " The page you are looking for is not found."
  }

}
