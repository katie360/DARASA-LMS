import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {
  enrolledCourses: any[] = [];
  totalChapters: number;
  completedChapters: number[] = [];
  progress: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Get('student/my-courses').subscribe((res: any) => {
      this.enrolledCourses = res;

      this.totalChapters = 25;
      this.completedChapters = [1, 2, 3, 4, 5];

      const completedCount = this.completedChapters.length;
      this.progress = (completedCount / this.totalChapters) * 100;
    });
  }

  courseDetails(course: any): void {
    const courseId = course.id;
    window.location.href = '/dashboard/course/' + courseId;
  }

 
  

  calculateProgress(course: any): void {
    this.totalChapters = 25;
    this.completedChapters = [1, 2, 3, 4, 5];

    const completedCount = this.completedChapters.length;
    this.progress = (completedCount / this.totalChapters) * 100;
  }
}
