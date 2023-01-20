import {Component, EventEmitter, Output} from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Search, SearchOption} from "../../interfaces/search.interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  faSearch = faSearch

  searchOptions: SearchOption[] = [
    {code: 'au', label: 'Autor', placeholder: 'Ej. Lorena Recalde'},
    {code: 'mrau', label: 'Autores relevantes', placeholder: 'Ej. Artificial Intelligence, Covid'},
    {code: 'mrar', label: 'Artículos relevantes', placeholder: 'Ej. Machine learning'}
  ]

  selectedOption: SearchOption = this.searchOptions[0]
  inputValue: string = ""

  @Output() search: EventEmitter<Search> = new EventEmitter<Search>()

}
