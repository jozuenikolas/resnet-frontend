/* Modules */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

/* Components */
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchComponent} from './components/search/search.component';
import {AuthorsTableComponent} from './components/authors-table/authors-table.component';
import {AuthorProfileComponent} from './pages/author-profile/author-profile.component';

/* Resolvers */
import {AuthorResolver} from "./resolvers/author.resolver";
import {SHARED_VISUALS} from "./visuals/shared";
import {D3_DIRECTIVES} from "./d3/directives";
import {D3Service} from "./d3";
import {CoauthorsGraphComponent} from "./components/coauthors-graph/coauthors-graph.component";
import {GraphComponent} from "./visuals/graph/graph.component";
import {
  MostRelevantAuthorsGraphComponent
} from './components/most-relevant-authors-graph/most-relevant-authors-graph.component';
import {
  MostRelevantArticlesTableComponent
} from './components/most-relevant-articles-table/most-relevant-articles-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    SearchComponent,
    AuthorsTableComponent,
    AuthorProfileComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    CoauthorsGraphComponent,
    MostRelevantAuthorsGraphComponent,
    MostRelevantArticlesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthorResolver,
    D3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
