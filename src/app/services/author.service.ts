import {Injectable} from '@angular/core';
import {AuthorResult} from "../interfaces/author.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  authorResults: AuthorResult[] = [
    {
      names: 'Lorena Recalde, Recalde L., L.',
      affiliations: 'Escuela Politécnica Nacional',
      articles: 11,
      topics: 'Housing needs, Graph analysis, Cognitive cities, Urban planing, Collective intelligence, Artificial intelligence, Machine learning'
    },
    {
      names: 'Efraín Recalde, Recalde E., E. R.',
      affiliations: 'Escuela Politécnica Nacional, Universad Central del Ecuador',
      articles: 7,
      topics: 'Videogames, Interactive Learning, Educational Software'
    },
    {
      names: 'Jorge Recalde, Recalde J., J. R.',
      affiliations: 'Universidad San Francisco de Quito',
      articles: 4,
      topics: 'Tf-idf, Neo4j, Graph database'
    },
    {
      names: 'Melany Recalde, Recalde M., M. R.',
      affiliations: 'Escuela Politécnica del Ejercito, Escuela Politécnica del Ecuador, Universidad Politécnica Salesiana',
      articles: 1,
      topics: 'Machine Learning, IA Models, Artificial intelligence'
    },
    {
      names: 'Lorena Recalde, Recalde L., L.',
      affiliations: 'Escuela Politécnica Nacional',
      articles: 11,
      topics: 'Housing needs, Graph analysis, Cognitive cities, Urban planing, Collective intelligence, Artificial intelligence, Machine learning'
    },
    {
      names: 'Efraín Recalde, Recalde E., E. R.',
      affiliations: 'Escuela Politécnica Nacional, Universad Central del Ecuador',
      articles: 7,
      topics: 'Videogames, Interactive Learning, Educational Software'
    },
    {
      names: 'Jorge Recalde, Recalde J., J. R.',
      affiliations: 'Universidad San Francisco de Quito',
      articles: 4,
      topics: 'Tf-idf, Neo4j, Graph database'
    },
    {
      names: 'Melany Recalde, Recalde M., M. R.',
      affiliations: 'Escuela Politécnica del Ejercito, Escuela Politécnica del Ecuador, Universidad Politécnica Salesiana',
      articles: 1,
      topics: 'Machine Learning, IA Models, Artificial intelligence'
    },
    {
      names: 'Lorena Recalde, Recalde L., L.',
      affiliations: 'Escuela Politécnica Nacional',
      articles: 11,
      topics: 'Housing needs, Graph analysis, Cognitive cities, Urban planing, Collective intelligence, Artificial intelligence, Machine learning'
    },
    {
      names: 'Efraín Recalde, Recalde E., E. R.',
      affiliations: 'Escuela Politécnica Nacional, Universad Central del Ecuador',
      articles: 7,
      topics: 'Videogames, Interactive Learning, Educational Software'
    },
    {
      names: 'Jorge Recalde, Recalde J., J. R.',
      affiliations: 'Universidad San Francisco de Quito',
      articles: 4,
      topics: 'Tf-idf, Neo4j, Graph database'
    },
    {
      names: 'Melany Recalde, Recalde M., M. R.',
      affiliations: 'Escuela Politécnica del Ejercito, Escuela Politécnica del Ecuador, Universidad Politécnica Salesiana',
      articles: 1,
      topics: 'Machine Learning, IA Models, Artificial intelligence'
    },
    {
      names: 'Lorena Recalde, Recalde L., L.',
      affiliations: 'Escuela Politécnica Nacional',
      articles: 11,
      topics: 'Housing needs, Graph analysis, Cognitive cities, Urban planing, Collective intelligence, Artificial intelligence, Machine learning'
    },
    {
      names: 'Efraín Recalde, Recalde E., E. R.',
      affiliations: 'Escuela Politécnica Nacional, Universad Central del Ecuador',
      articles: 7,
      topics: 'Videogames, Interactive Learning, Educational Software'
    },
    {
      names: 'Jorge Recalde, Recalde J., J. R.',
      affiliations: 'Universidad San Francisco de Quito',
      articles: 4,
      topics: 'Tf-idf, Neo4j, Graph database'
    },
    {
      names: 'Melany Recalde, Recalde M., M. R.',
      affiliations: 'Escuela Politécnica del Ejercito, Escuela Politécnica del Ecuador, Universidad Politécnica Salesiana',
      articles: 1,
      topics: 'Machine Learning, IA Models, Artificial intelligence'
    },
    {
      names: 'Lorena Recalde, Recalde L., L.',
      affiliations: 'Escuela Politécnica Nacional',
      articles: 11,
      topics: 'Housing needs, Graph analysis, Cognitive cities, Urban planing, Collective intelligence, Artificial intelligence, Machine learning'
    },
    {
      names: 'Efraín Recalde, Recalde E., E. R.',
      affiliations: 'Escuela Politécnica Nacional, Universad Central del Ecuador',
      articles: 7,
      topics: 'Videogames, Interactive Learning, Educational Software'
    },
    {
      names: 'Lorena Recalde, Recalde L., L.',
      affiliations: 'Escuela Politécnica Nacional',
      articles: 11,
      topics: 'Housing needs, Graph analysis, Cognitive cities, Urban planing, Collective intelligence, Artificial intelligence, Machine learning'
    },
    {
      names: 'Efraín Recalde, Recalde E., E. R.',
      affiliations: 'Escuela Politécnica Nacional, Universad Central del Ecuador',
      articles: 7,
      topics: 'Videogames, Interactive Learning, Educational Software'
    },
    {
      names: 'Lorena Recalde, Recalde L., L.',
      affiliations: 'Escuela Politécnica Nacional',
      articles: 11,
      topics: 'Housing needs, Graph analysis, Cognitive cities, Urban planing, Collective intelligence, Artificial intelligence, Machine learning'
    },
    {
      names: 'Efraín Recalde, Recalde E., E. R.',
      affiliations: 'Escuela Politécnica Nacional, Universad Central del Ecuador',
      articles: 7,
      topics: 'Videogames, Interactive Learning, Educational Software'
    },
    {
      names: 'Lorena Recalde, Recalde L., L.',
      affiliations: 'Escuela Politécnica Nacional',
      articles: 11,
      topics: 'Housing needs, Graph analysis, Cognitive cities, Urban planing, Collective intelligence, Artificial intelligence, Machine learning'
    },
    {
      names: 'Efraín Recalde, Recalde E., E. R.',
      affiliations: 'Escuela Politécnica Nacional, Universad Central del Ecuador',
      articles: 7,
      topics: 'Videogames, Interactive Learning, Educational Software'
    }
  ]


  constructor() {
  }


  getAuthorsByQuery(): AuthorResult[] {
    return this.authorResults
  }

}
