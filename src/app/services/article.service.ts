import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../interfaces/article.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  rootURL: string = environment.apiUrl

  constructor(private http: HttpClient) {
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.rootURL}article/${id}`)
  }
}
