import { Component, AfterViewInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';


declare const paypal: any;

@Component({
  selector: 'app-paypal-checkout',
  templateUrl: './paypal-checkout.component.html',
  styleUrls: ['./paypal-checkout.component.css']
})
export class PaypalCheckoutComponent implements AfterViewInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService) {
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
              currency_code: "USD",
              value: this.data.total_price.toFixed(2)
            }
          }]
        });
      },
      onApprove: async (data: any, actions: any) => {
        const order = await actions.order.capture();

        // Send the order id to the backend and get the courses from the local storage and send them to the backend
        const courses = JSON.parse(localStorage.getItem('courses') || '[]');
        // Add the order id and courses to the body
        const body = { orderID: order.id, courses: courses };

        this.apiService.Post('checkout/payment-complete/', body).subscribe((res: any) => {
          // clear form
          alert('Payment successful!');
          window.location.href = '/dashboard/courses';
          // remove the courses from the local storage
          localStorage.removeItem('courses');
          
        }, (error: any) => {
          console.error(error); 
          alert('Payment failed!');
        });
        console.log(order);
      },


      

    }).render('#myPaypalButtons')
  }


}
