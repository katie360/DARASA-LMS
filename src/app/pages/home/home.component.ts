import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories: any;
  courses: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Get('categories').subscribe((res: any) => {
      this.categories = res;
    });
    this.apiService.Get('courses').subscribe((res: any) => {
      this.courses = res;
    });
  }

}
