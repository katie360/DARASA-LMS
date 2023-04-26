import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {
  courses: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // get user from local storage
    const user = localStorage.getItem('user');
    console.log(user);
    if(user !== null) {
      const data = JSON.parse(user);
      const email = data.email;
      
      // get user profile
      const body = { email: email };
      this.apiService.Post('student/courses/', body).subscribe((res: any) => {
        this.courses = res;
        console.log(this.courses);
      });

    }
    
  }


}
