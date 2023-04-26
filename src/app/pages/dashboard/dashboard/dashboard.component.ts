import { Component, OnInit ,ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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

  constructor(private breakpointObserver: BreakpointObserver, private apiService: ApiService) {}

  ngOnInit() {}

  logout() {
    this.apiService.Post('auth/logout/', null).subscribe((res: any) => {
      console.log(res);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href = '/';
    });
  }

}





