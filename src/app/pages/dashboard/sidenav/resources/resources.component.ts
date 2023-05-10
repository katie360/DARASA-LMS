import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { EnrollCourseComponent } from '../enroll-course/enroll-course.component';
import { MatDialog } from '@angular/material/dialog';
import { Course } from './course.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  courses: any;
  enrolledCourses: any[] = [];
  course: any;

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.apiService.Get('courses').subscribe((res: any) => {
      this.courses = res;
    });
  }

  enroll(course: any) {
    console.log(course);

    //Navigate to enroll course page and send course id
    window.location.href = `/dashboard/enroll/${course.id}`;
  }

  openModal(course: Course): void {
    const dialogRef = this.dialog.open(EnrollCourseComponent, {
      width: '600px', 
      height: '400px',
      data: course,
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
