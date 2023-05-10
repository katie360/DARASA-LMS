import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  courses: any[] = []; // array to store the courses
  currentPage: number = 1; // current page number
  itemsPerPage: number = 1; // number of items to display per page


  // get course id from url
  courseId = window.location.href.split('/').pop();


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    const body = { course_id: this.courseId };
    this.apiService.Post('course-chapters/', body).subscribe((res: any) => {
      this.courses = res;
    });
  }

  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;

      // get total pages
      const chapters = this.getTotalPages();

      // divide 100 by total pages
      const progress = 100 / chapters;

      // multiply current page by progress
      const currentProgress = this.currentPage * progress;

      // get user from local storage
      const user = localStorage.getItem('user');
      if (user !== null) {
        const data = JSON.parse(user);
        const email = data.email;

        const courseId = window.location.href.split('/').pop();

        // send the progress to the backend
        const body = { email: email, course_id: courseId, progress: currentProgress };
        this.apiService.Post('student/course-progress/', body).subscribe((res: any) => {
          console.log(res);
        });
      }
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.courses.length / this.itemsPerPage);
  }

  getCurrentCourses(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.courses.slice(startIndex, endIndex);
  }

  // downloadFile(url: string): void {
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = this.courses.name;
  //   link.target = '_blank'; // Open the file in a new tab/window

  //   document.body.appendChild(link);
  //   link.click();

  //   document.body.removeChild(link);
  // }
}
