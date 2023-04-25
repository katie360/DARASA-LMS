import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showingPopup = false;
  categories: any;

  showPopup() {
    this.showingPopup = true;
  }

  hidePopup() {
    this.showingPopup = false;
  }

  flashPopup = false;

  Popup() {
    this.flashPopup = true;
  }

  noPopup() {
    this.flashPopup = false;
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Get('categories').subscribe((res: any) => {
      this.categories = res;
    });
  }

}
