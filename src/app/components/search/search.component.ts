import {Component, EventEmitter, Output} from '@angular/core';
import {faNewspaper, faSearch, faUser, faUsers} from "@fortawesome/free-solid-svg-icons";
import {Search, SearchOption} from "../../interfaces/search.interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  faSearch = faSearch

  searchOptions: SearchOption[] = [
    {code: 'au', label: 'Autor', placeholder: 'Ej. Lorena Recalde', icon: faUser},
    {code: 'mrau', label: 'Autores relevantes', placeholder: 'Ej. Artificial Intelligence, Covid', icon: faUsers},
    {code: 'mrar', label: 'Artículos relevantes', placeholder: 'Ej. Machine learning', icon: faNewspaper}
  ]

  selectedOption: SearchOption = this.searchOptions[0]
  inputValue: string = ""

  @Output() search: EventEmitter<Search> = new EventEmitter<Search>()

}
