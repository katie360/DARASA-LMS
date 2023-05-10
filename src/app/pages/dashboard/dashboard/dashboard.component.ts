import { Component, OnInit ,ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { ApiService } from 'src/app/services/api/api.service';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  coursesCount = 0;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private apiService: ApiService, private coursesService: CoursesService) {}

  ngOnInit() {
   
    this.subscribeToCourseChanges();
  }

  logout() {
    this.apiService.Post('auth/logout/', null).subscribe((res: any) => {
      console.log(res);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href = '/';
    });
  }

  // updateCoursesCount(): void {
  //   const courses = this.coursesService.getCourses();
  //   this.coursesCount = courses ? courses.length : 0;
  // }

  subscribeToCourseChanges(): void {
    this.coursesService.getCourses().subscribe(courses => {
      this.coursesCount = courses ? courses.length : 0;
    });
  }

}





