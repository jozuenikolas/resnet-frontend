import {Component} from '@angular/core';
import {Search} from "../../interfaces/search.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchValue!: Search

  constructor() {
    scroll({top: 0, behavior: 'smooth'})
  }

  onSearch(searchValue: Search) {
    this.searchValue = searchValue
    console.log(this.searchValue)
  }
}
