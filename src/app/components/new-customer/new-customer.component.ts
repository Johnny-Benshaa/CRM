import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-new-customer',

  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  constructor(
    private cs: CustomersService,
    private router: Router,
    private fms: FlashMessagesService

  ) { }

  pageTitle: string;
  pageIcon: string;
  pageDescription: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  notes: string;


  ngOnInit(): void {
    this.pageTitle = "Add New Customer";
    this.pageIcon = "fas fa-user-plus";
    this.pageDescription = "Here you add new customer";
  }
  onSubmit({ value, valid }: { value: Customer, valid: boolean }) {
    if (valid) {
      this.fms.show('Customer saved', {
        cssClass: 'fixed-top m-auto bg-success text-white text-center w-50',
        timeout: 3000
      });

      this.cs.addCustomer(value);
      this.router.navigate(['/customers'])
    }


  }

}
