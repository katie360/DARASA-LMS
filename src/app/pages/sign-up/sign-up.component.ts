import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name: string;
  email: string;
  password1: string;
  password2: string;

  constructor(private apiService: ApiService) { }

  signUp() {
    const body = { email: this.email, password1: this.password1, password2: this.password2 };
    this.apiService.Post('auth/register/', body).subscribe((res: any) => {
      // clear form
      this.name = '';
      this.email = '';
      this.password1 = '';
      this.password2 = '';
      
      alert('User created successfully!, Please login');

      // redirect to login page
      window.location.href = '/login';

    }, (error: any) => {
      alert({ error});
    });
  }

}
