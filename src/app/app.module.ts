import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { AppComponent }  from './app.component';
import { CustomerComponent, CustomersComponent, CustomerService } from './customer/index';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
  ],
  declarations: [ 
  	AppComponent,
  	CustomerComponent,
  	CustomersComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ CustomerService ]
})
export class AppModule { }
