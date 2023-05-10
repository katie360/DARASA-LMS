import { Component } from '@angular/core';
import { PaypalCheckoutComponent } from '../paypal-checkout/paypal-checkout.component';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from '../../dashboard/courses.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  courses: any;
  total_price: number = 0;

  constructor(private dialog: MatDialog, private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = JSON.parse(localStorage.getItem('courses') || '[]');

    // get the prices of all the courses
    let prices = this.courses.map((course: any) => course.price);
    // Sum the prices of all the courses
    this.total_price = prices.reduce((a: any, b: any) => a + b, 0);

  }

  removeCourse(index: number) {
   this.coursesService.removeCourse(index);

    // Remove the course from the courses array and update the total price
    this.courses.splice(index, 1);
    this.total_price = this.courses.map((course: any) => course.price).reduce((a: any, b: any) => a + b, 0);

  }

  checkout(total_price: any) {
    const dialogRef = this.dialog.open(PaypalCheckoutComponent, {
      width: '600px',
      height: '400px',
      data: { total_price: total_price },
      // Additional options for the modal dialog
      // ...
    });

    // Optional: Subscribe to the afterClosed() event to handle modal close actions
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any actions or data returned from the modal
      // ...
    });
  }

}
