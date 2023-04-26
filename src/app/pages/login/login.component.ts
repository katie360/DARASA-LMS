import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private apiService: ApiService, private router: Router) { }

  login() {
    const body = { username: this.username, password: this.password };
    this.apiService.Post('auth/login/', body).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigate(['/dashboard']);

    }, (error: any) => {
      alert("Invalid username or password");
    });
  }

}
