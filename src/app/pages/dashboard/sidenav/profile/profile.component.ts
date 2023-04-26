import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  student: any;

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
      this.apiService.Post('student/profile-details/', body).subscribe((res: any) => {
        this.student = res;
        console.log(this.student);
      });
    }
  }

  logout() {
    this.apiService.Post('auth/logout/', null).subscribe((res: any) => {
      console.log(res);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href = '/';
    });
  }

}
