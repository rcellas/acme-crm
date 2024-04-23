import { Component } from '@angular/core';
import { Customer } from '../../shared/customer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {

  customers:Customer[]=[
    {
      id:1,
      name:"Javier Prades"
    },
    {
      id:2,
      name:"Lola Bunny"
    }
  ]

  trackCustomer(index:number, customer: Customer){
    return customer.id;
  }

}
