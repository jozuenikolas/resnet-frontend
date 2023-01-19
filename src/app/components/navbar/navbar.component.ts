import {Component} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  faBars = faBars;
  showDropdown: boolean = false

  items: any[] = [
    {route: '/home', label: 'INICIO'},
    {route: '/about', label: 'ACERCA DE'}
  ]

}
