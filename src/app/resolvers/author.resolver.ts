import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {catchError, Observable, of} from 'rxjs';
import {AuthorService} from "../services/author.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorResolver implements Resolve<any> {

  constructor(private authorService: AuthorService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const {id} = route.params
    return this.authorService.getAuthorById(id).pipe(
      catchError(() => {
        this.router.navigate(['/home'])
        return of(null)
      })
    )
  }
}
