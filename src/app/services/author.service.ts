import {Injectable} from '@angular/core';
import {Author, AuthorResult, PaginationAuthorResult} from "../interfaces/author.interface";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  rootURL: string = environment.apiUrl

  constructor(private http: HttpClient) {
  }

  getAuthorsByQuery(query: string, page: number, size: number): Observable<PaginationAuthorResult> {
    return this.http.get<PaginationAuthorResult>(`${this.rootURL}authors/get-authors-by-query?query=${query}&page=${page}&size=${size}`)
      .pipe(map((response) => {
        let mappedData = response.data.map((author) => {
          return this.mapAuthorTopics(author)
        })
        return {data: mappedData, total: response.total}
      }))
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.rootURL}author/${id}`)
  }

  mapAuthorTopics(author: AuthorResult) {
    if (author.topics.length > 10) {
      author.topics = author.topics.splice(0, 10)
      author.topics.push('...')
    }
    return author
  }

}
