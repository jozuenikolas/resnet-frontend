import {ChangeDetectorRef, Component} from '@angular/core';
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
  loading: boolean = false

  constructor(private route: ActivatedRoute, private changeDetector: ChangeDetectorRef,) {
    const {option, query} = route.snapshot.queryParams
    if (option && query)
      this.setSearch = {option, query}
  }

  onSearch(searchValue: Search) {
    this.searchValue = {
      ...searchValue,
      query: searchValue.query.trim().replace(/\s\s+/g, ' ')
    };
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
