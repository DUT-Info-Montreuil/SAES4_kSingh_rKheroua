import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
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
    NgbDropdown, NgbDropdownMenu, NgbDropdownItem,HttpClientModule],
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-ng17';
}
