import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchValue: any

  constructor() {
    scroll({top: 0, behavior: 'smooth'})
  }

  onSearch(searchValue: any) {
    this.searchValue = searchValue
    console.log(this.searchValue)
  }
}
