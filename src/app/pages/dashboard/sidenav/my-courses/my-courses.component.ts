import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {
  courses: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Get('course-category/frontend').subscribe((res: any) => {
      this.courses = res;
    });
  }
}
