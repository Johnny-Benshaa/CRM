import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service'; import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

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
    private route: ActivatedRoute,
    private fms: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.pageTitle = "Edit Customers";
    this.pageIcon = "fas fa-pen";
    this.pageDescription = "Here you can edit your customers details";
    this.id = this.route.snapshot.params.id;
    this.cs.getCustomer(this.id).subscribe(customer => this.customer = customer);

  }
  onSubmit({ value, valid }: { value: Customer, valid: boolean }) {
    if (valid) {
      this.fms.show('Customer Updated', {
        cssClass: 'fixed-top m-auto bg-success text-white text-center w-50',
        timeout: 3000
      });
      value.id = this.id;
      this.cs.updateCustomer(value);
      this.router.navigate(['/customers']);
    }
  }

}
