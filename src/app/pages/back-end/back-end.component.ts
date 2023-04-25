import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-back-end',
  templateUrl: './back-end.component.html',
  styleUrls: ['./back-end.component.css']
})
export class BackEndComponent {
  courses: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Get('course-category/backend').subscribe((res: any) => {
      this.courses = res;
    });
  }
}
