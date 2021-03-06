import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { CustomerDetailsComponent } from "./components/customer-details/customer-details.component";
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const appRouters: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: 'customer/new', component: NewCustomerComponent },
  { path: 'customer/:id', component: CustomerDetailsComponent },
  { path: 'customer/:id/edit', component: EditCustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouters)
  ]
})
export class AppRoutingModule { }
