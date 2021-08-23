import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from '../../services/customers.service';
import * as _ from 'lodash';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  pageTitle: string;
  pageIcon: string;
  pageDescription: string;
  customers: any;


  searchNameText: string;
  customer: Array<Customer>;
  customersLength: number;
  customersCache: Array<Customer>;



  constructor(
    private cs: CustomersService
  ) { }

  ngOnInit(): void {
    this.pageTitle = "Customers";
    this.pageIcon = "fas fa-users";
    this.pageDescription = "Here you can see all of our customers";
    this.cs.getCustomers().subscribe(customers => this.customers = customers);
    this.cs.getCustomers().subscribe((customers: Array<Customer>) => {
      this.customersCache = this.customers = _.sortBy(customers, ['firstName']);
      this.customersLength = this.customers.length;
    });
  }


  showOnHover(event) {
    event.target.children[0].children[0].style.cssText = "visibility:visible !important";
  }



  hideOnLeave(event) {
    event.target.children[0].children[0].style.cssText = "visibility:invisible !important";
  }

  deleteCustomer(customerId, event) {
    event.preventDefault();
    if (confirm("are you sure you want to delete this customer?")) {
      this.cs.deleteCustomer(customerId);
    }
  }

  onKeyUpSearch() {
    var searchText = this.searchNameText.toLowerCase().trim();
    if (searchText.length > 0) {
      this.customers = this.customersCache.filter((customer) =>
        _.includes(customer.firstName.toLowerCase(), searchText));
    } else {
      this.customers = this.customersCache
    }

  }
}
/* getCustomers() {
    this.cs.getAll().get().then((result) => {
      let test = [];
      result.forEach((customer) => {
        let obj = customer.data();
        test.push(obj);

      });
      console.log(test)
    });
  }
 */