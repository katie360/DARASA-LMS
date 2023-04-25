import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent {
  courses: any

  constructor (private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.Get('courses').subscribe((res: any) => {
      this.courses = res;
    });
  }
}
