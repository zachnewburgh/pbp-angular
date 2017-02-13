import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomerService } from './index';

@Component({
	moduleId: module.id,
	selector: 'app-customers',
	templateUrl: 'customers.component.html',
	providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
	customers: any[];
	// Add "| async to *ngFor in customers.component.html"
	// customers: Promise<any[];
	// customers: Observable<any[]>;

	constructor(private _customerService: CustomerService) {}

	ngOnInit() {

		// Rx observable version with subscribe function to a customer array
		this._customerService.getCustomers_RxObservable()
			.subscribe(
				(customers) => this.customers = customers,
				(err) => { console.log(err);}
			);

		// Promise to Array
		// this._customerService.getCustomers()
		// 	.then((customers) => this.customers = customers)
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});

		// Promise<any[]>
		// this.customers = this._customerService.getCustomers()
		// 	.catch((err) => {
		// 		console.log(err);
		// 		return Observable.of(true);
		// 	});

		// Rx observable version
		// this.customers = this._customerService.getCustomers()
		// 	.catch((err) => {
		// 		console.log(err);
		// 		return Observable.of(true);
		// 	});
	}
}