import {Component} from '@angular/core';
import {Search} from "../../interfaces/search.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchValue!: Search

  setSearch: Search

  constructor(private route: ActivatedRoute) {
    const {option, query} = route.snapshot.queryParams
    if (option && query)
      this.setSearch = {option, query}
  }

  onSearch(searchValue: Search) {
    this.searchValue = searchValue
    console.log("searchValue", this.searchValue)
  }
}
