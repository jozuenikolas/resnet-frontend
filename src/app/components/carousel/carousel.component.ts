import {Component} from '@angular/core';
import {faCaretRight, faCaretLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  faCaretRight = faCaretRight;

  faCaretLeft = faCaretLeft;

  items: any[] = [
    {
      title: 'Búsqueda de autor',
      subtitle: 'Busca autores por nombre, apellido, identificador o sus iniciales',
      route: '/about'
    },
    {
      title: 'Búsqueda de autores relevantes',
      subtitle: 'Busca autores por nombre, apellido, identificador o sus iniciales',
      route: '/about'
    },
    {
      title: 'Búsqueda de artículos',
      subtitle: 'Busca autores por nombre, apellido, identificador o sus iniciales',
      route: '/about'
    }
  ]

}
