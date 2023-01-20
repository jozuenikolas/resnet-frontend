import {Component} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {NavbarItem} from "../../interfaces/navbar.interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  faBars = faBars;
  showDropdown: boolean = false

  items: NavbarItem[] = [
    {route: '/home', label: 'INICIO'},
    {route: '/about', label: 'ACERCA DE'}
  ]

}
