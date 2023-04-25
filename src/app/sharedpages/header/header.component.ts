import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showingPopup = false;

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
}
