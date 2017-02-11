import { Component } from '@angular/core';
import { CustomerService } from './customer/customer.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
	title = 'Customer App';
	name = 'Ward';
	wardsColor = 'green';

	changeSuitColor() {
		this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
	}
}
