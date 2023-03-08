import {Component, Input, SimpleChanges} from '@angular/core';
import {BehaviorSubject, Observable, switchMap, tap} from "rxjs";
import {Article, PaginationArticleResult} from "../../interfaces/article.interface";
import {ArticleService} from "../../services/article.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-most-relevant-articles-table',
  templateUrl: './most-relevant-articles-table.component.html',
  styleUrls: ['./most-relevant-articles-table.component.scss']
})
export class MostRelevantArticlesTableComponent {

  @Input() query: string

  page = 1;
  size = 5;

  refreshTable$: BehaviorSubject<{ page: number, size: number, type?: string, years?: number[] }>
    = new BehaviorSubject<{ page: number, size: number, type?: string, years?: number[] }>({
    page: this.page,
    size: this.size
  })

  articles$: Observable<PaginationArticleResult>

  article!: Article

  years: number[]
  setYears = true

  selectedYears: number[] = []
  selectedType: string

  constructor(private articleService: ArticleService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.articles$ = this.refreshTable$
      .pipe(
        switchMap(({page, size, type, years}) => {
            if (type) {
              return this.articleService.getMostRelevantArticlesByQuery(this.query, page, size, type, years)
            } else {
              return this.articleService.getMostRelevantArticlesByQuery(this.query, page, size)
            }
          }
        ),
        tap((articles) => {
          if (this.setYears)
            this.years = articles.years
        })
      )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['query']) {
      this.years = []
      this.selectedYears = []
      this.selectedType = ''

      this.setYears = true
      this.refreshTable$.next({page: this.page, size: this.size})
    }
  }

  onChangePagination() {
    this.setYears = false
    if (this.selectedType)
      this.refreshTable$.next({page: this.page, size: this.size, type: this.selectedType, years: this.selectedYears})
    else
      this.refreshTable$.next({page: this.page, size: this.size})
  }

  onClickCheckbox(event: any) {
    let item = Number(event.target.id)
    if (event.target.checked) {
      this.selectedYears.push(item)
    } else {
      this.selectedYears.splice(this.selectedYears.indexOf(item), 1)
    }
    console.log("selectedYears", this.selectedYears)
  }

  onClickYearsFilter(type: string) {
    this.setYears = false
    this.selectedType = type
    this.refreshTable$.next({page: this.page, size: this.size, type: this.selectedType, years: this.selectedYears})
  }


  openModal(content: any, articleId: number) {
    this.articleService.getArticleById(articleId).subscribe((article: Article) => {
      this.article = article
      this.modalService.open(content, {scrollable: true, size: "lg", centered: true}).result.then(
        (result) => {
          console.log("result", result)
        },
        (reason) => {
          console.log("reason", reason)
        },
      );
    })
  }

}
