import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
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
  @Input() setSearch: Search
  @Input() isLoading: boolean = false

  ngOnChanges(changes: SimpleChanges) {
    if (changes['setSearch']?.currentValue) {
      let searchOp = this.searchOptions.find(item => item.code == this.setSearch.option)
      this.selectedOption = searchOp ? searchOp : this.searchOptions[1]
      this.inputValue = this.setSearch.query
      this.search.emit({
        option: this.selectedOption.code,
        query: this.inputValue
      })
    }
  }

  onEnter(event: KeyboardEvent) {
    if (event.code === 'Enter')
      this.search.emit({
        option: this.selectedOption.code,
        query: this.inputValue
      })
  }
}
