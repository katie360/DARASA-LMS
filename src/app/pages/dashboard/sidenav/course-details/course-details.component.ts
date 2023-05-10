import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  course: any;

  // get course id from url
  courseId = window.location.href.split('/').pop();


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Get('course-content/' + this.courseId).subscribe((res: any) => {
      this.course = res;
    });

  }

  downloadFile(url: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = this.course.name;
    link.target = '_blank'; // Open the file in a new tab/window

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }
}
