import { Component, AfterViewInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


declare const paypal: any;

@Component({
  selector: 'app-paypal-checkout',
  templateUrl: './paypal-checkout.component.html',
  styleUrls: ['./paypal-checkout.component.css']
})
export class PaypalCheckoutComponent implements AfterViewInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngAfterViewInit() {
    paypal.Buttons({
      id: "myPaypalButtons",
      currency: "USD",
      value: this.data.total_price,

      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: this.data.total_price.toFixed(2)
            }
          }]
        });
      }


      

    }).render('#myPaypalButtons')
  }


}
