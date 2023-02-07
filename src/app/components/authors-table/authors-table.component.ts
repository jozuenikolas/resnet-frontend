import {Component, Input, SimpleChanges} from '@angular/core';
import {PaginationAuthorResult} from "../../interfaces/author.interface";
import {AuthorService} from "../../services/author.service";
import {BehaviorSubject, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.scss']
})
export class AuthorsTableComponent {

  @Input() query!: string

  page = 1;
  pageSize = 4;

  refreshTable$: BehaviorSubject<{ page: number, size: number }>
    = new BehaviorSubject<{ page: number, size: number }>({page: this.page, size: this.pageSize})

  authors$!: Observable<PaginationAuthorResult>

  constructor(private authorService: AuthorService) {
  }


  ngOnInit() {
    this.authors$ = this.refreshTable$
      .pipe(
        switchMap(({page, size}) =>
          this.authorService.getAuthorsByQuery(this.query, page, size)
        )
      )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['query']) {
      this.refreshTable$.next({page: this.page, size: this.pageSize})
    }
  }

  onChangePagination() {
    this.refreshTable$.next({page: this.page, size: this.pageSize})
  }
}
