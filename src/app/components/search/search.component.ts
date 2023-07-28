import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {faNewspaper, faSearch, faUser, faUsers} from "@fortawesome/free-solid-svg-icons";
import {Search, SearchOption} from "../../interfaces/search.interface";
import {AuthorService} from "../../services/author.service";
import {RandItem} from "../../interfaces/author.interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  faSearch = faSearch

  searchOptions: SearchOption[] = [
    {code: 'au', label: 'Author', placeholder: 'e.g. Jhon Smith', icon: faUser},
    {code: 'mrau', label: 'Relevant authors', placeholder: 'e.g. Artificial Intelligence, Covid', icon: faUsers},
    {code: 'mrar', label: 'Relevant articles', placeholder: 'e.g. Machine learning', icon: faNewspaper}
  ]

  selectedOption: SearchOption
  inputValue: string = ""

  @Output() search: EventEmitter<Search> = new EventEmitter<Search>()
  @Input() setSearch: Search
  @Input() isLoading: boolean = false

  randItems: RandItem[]

  constructor(private authorService: AuthorService) {
    this.setOption(this.searchOptions[0])
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['setSearch']?.currentValue) {
      let searchOp = this.searchOptions.find(item => item.code == this.setSearch.option)

      if(searchOp){
        this.setOption(searchOp)
      } else {
        this.setOption(this.searchOptions[1])
      }

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

  setOption(option: SearchOption) {
    this.selectedOption = option
    if (this.selectedOption.code == 'au') {
      this.authorService.getRandomAuthors().subscribe((ranItems) => {
        this.randItems = ranItems
      })
    } else if (this.selectedOption.code == 'mrau' || this.selectedOption.code == 'mrar') {
      this.authorService.getRandomTopics().subscribe((ranItems) => {
        this.randItems = ranItems
      })
    }
  }
}
