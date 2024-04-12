import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbNav,
  NgbNavItem,
  NgbNavLink
} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, RouterLink, RouterLinkActive,
    NgbNavItem, NgbNavLink, NgbNav,
    NgbDropdown, NgbDropdownMenu, NgbDropdownItem, HttpClientModule],
  standalone: true
})
export class AppComponent {
  title = 's4Front';
}
