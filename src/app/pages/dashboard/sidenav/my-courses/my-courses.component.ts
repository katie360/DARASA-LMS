import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {
  enrolledCourses: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Get('student/my-courses').subscribe((res: any) => {
      this.enrolledCourses = res;
    });
  }

  courseDetails(course: any): void {
    const courseId = course.id;
    window.location.href = '/dashboard/course/' + courseId;
  }
}
