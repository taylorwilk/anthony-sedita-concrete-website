import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {

  onClick() {
    let navInput = document.getElementById("nav-toggle") as HTMLInputElement;
    if (navInput) {
      navInput.checked = false;
    }
  }
}
