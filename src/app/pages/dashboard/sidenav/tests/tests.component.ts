import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {
  assignments: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // get user from local storage
    const user = localStorage.getItem('user');;
    if (user !== null) {
      const data = JSON.parse(user);
      const email = data.email;

      // get user profile
      const body = { email: email };
      this.apiService.Post('student/assignments/', body).subscribe((res: any) => {
        this.assignments = res;
      });
    }

  }

}
