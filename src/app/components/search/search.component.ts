import {Component, EventEmitter, Output} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  faSearch = faSearch

  searchOptions: any[] = [
    {code: 'au', label: 'Autor', placeholder: 'Lorena Recalde'},
    {code: 'mrau', label: 'Autores relevantes', placeholder: 'Artificial Intelligence, Covid'},
    {code: 'mrar', label: 'Artículos relevantes', placeholder: 'Machine learning'}
  ]

  selectedOption: any = this.searchOptions[0]
  inputValue: string = ""

  @Output() search: EventEmitter<any> = new EventEmitter<any>()

}
