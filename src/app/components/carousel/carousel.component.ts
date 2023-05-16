import {Component} from '@angular/core';
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {CarouselItem} from "../../interfaces/carousel.interface";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;

  items: CarouselItem[] = [
    {
      title: 'Búsqueda de autor',
      subtitle: 'Busca autores por nombre, apellido, identificador o sus iniciales',
      section: 'AU'
    },
    {
      title: 'Búsqueda de autores relevantes',
      subtitle: 'Busca los autores más relevantes sobre cualquier tema',
      section: 'MRAU'
    },
    {
      title: 'Búsqueda de artículos relevantes',
      subtitle: 'Busca el estado del arte del cualquier tema',
      section: 'MRAR'
    }
  ]

}
