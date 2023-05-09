import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  courses: any;
  enrolledCourses: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Get('courses').subscribe((res: any) => {
      this.courses = res;
    });
  }

  enroll(course: any) {
    this.apiService.Post('enroll', course).subscribe((res: any) => {
      console.log(res);
     
      this.enrolledCourses.push(course);
    }, (error: any) => {
      console.log(error);
    });
  }
  
}
