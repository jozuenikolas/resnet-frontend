import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Author} from "../../interfaces/author.interface";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../interfaces/article.interface";

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.scss']
})
export class AuthorProfileComponent {

  author!: Author
  article!: Article

  showCoauthorsGraph: boolean = false

  constructor(private activatedRoute: ActivatedRoute,
              private modalService: NgbModal,
              private articleService: ArticleService) {
    this.setAuthor()
  }

  setAuthor() {
    const {author} = this.activatedRoute.snapshot.data
    if (!author) return;
    this.author = {...author}
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
