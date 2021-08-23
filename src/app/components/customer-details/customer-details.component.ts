import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service'; import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  pageTitle: string;
  pageIcon: string;
  pageDescription: string;
  id: string;
  customer: Customer = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    notes: ""
  };

  constructor(
    private cs: CustomersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pageTitle = "Customers Details";
    this.pageIcon = "fas fa-eye";
    this.pageDescription = "Here you can see all of our customers Details";
    this.id = this.route.snapshot.params.id;
    this.cs.getCustomer(this.id).subscribe(customer => this.customer = customer);

  }

}
