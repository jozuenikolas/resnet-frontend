import {Component, Input} from '@angular/core';
import {AuthorResult} from "../../interfaces/author.interface";
import {AuthorService} from "../../services/author.service";

@Component({
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.scss']
})
export class AuthorsTableComponent {

  @Input() query!: string

  authors!: AuthorResult[]

  page = 1;
  pageSize = 4;
  collectionSize = 24;

  constructor(private authorService: AuthorService) {
    this.refreshTable()
  }

  ngOnChanges() {
    console.log('QUERY', this.query)
  }

  refreshTable() {
    this.authors = this.authorService.getAuthorsByQuery().map((country, i) => ({id: i + 1, ...country})).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }
}
