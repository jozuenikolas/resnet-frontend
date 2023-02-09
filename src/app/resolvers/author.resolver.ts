import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {catchError, Observable, of} from 'rxjs';
import {AuthorService} from "../services/author.service";
import {Author} from "../interfaces/author.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthorResolver implements Resolve<Author | null> {

  constructor(private authorService: AuthorService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Author | null> {
    const {id} = route.params
    return this.authorService.getAuthorById(id).pipe(
      catchError(() => {
        this.router.navigate(['/home'])
        return of(null)
      })
    )
  }
}
