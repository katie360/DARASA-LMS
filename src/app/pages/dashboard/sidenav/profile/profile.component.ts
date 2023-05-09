import { HttpHeaders } from '@angular/common/http';
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

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  private getHttpOptions(): any {
    const token = this.getToken();
    if (token !== null) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        })
      };
    } else {
      return { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    }
  }

  private httpOptions = this.getHttpOptions();

  logout() {
    this.apiService.Post('auth/logout/', { headers: this.httpOptions.headers }).subscribe((res: any) => {
      console.log(res);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href = '/';
    });
  }

}
