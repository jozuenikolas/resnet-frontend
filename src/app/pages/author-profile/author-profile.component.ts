import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Author} from "../../interfaces/author.interface";

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.scss']
})
export class AuthorProfileComponent {

  author!: Author

  constructor(private activatedRoute: ActivatedRoute) {
    this.setAuthor()
  }

  setAuthor() {
    const {author} = this.activatedRoute.snapshot.data
    if (!author) return;
    this.author = {...author}
  }

}
