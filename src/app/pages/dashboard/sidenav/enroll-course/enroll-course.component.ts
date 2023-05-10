import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';
import { Course } from '../resources/course.model';
import { CoursesService } from '../../dashboard/courses.service';

@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: ['./enroll-course.component.css']
})
export class EnrollCourseComponent {
  course: any;

  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: Course, private dialogRef: MatDialogRef<EnrollCourseComponent>, private coursesService: CoursesService) {
   }

  ngOnInit(): void {
    // get id from url
    const url = window.location.href;
    const id = url.split('/').pop();
    

    // get course details by sending id
    this.apiService.Get(`courses/${id}`).subscribe((res: any) => {
      this.course = res;
    }, (err: any) => {
      console.log(err);
    });
  }

  enroll(course: any) {
    console.log(course);

    // close the modal
    this.dialogRef.close();

    this.coursesService.addCourse(course);


    // // Add the course to a local storage array to be displayed on the checkout page
    // let courses = JSON.parse(localStorage.getItem('courses') || '[]');
    // courses.push(course);
    // localStorage.setItem('courses', JSON.stringify(courses));


    //Navigate to enroll course page and send course id
    // window.location.href = `/dashboard/enroll/${course.id}`;
  
  }

}
