import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.css']
})
export class FrontEndComponent {
  courses: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Get('course-category/frontend').subscribe((res: any) => {
      this.courses = res;
    });
  }
}
