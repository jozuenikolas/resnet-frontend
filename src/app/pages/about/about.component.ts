import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

interface Section {
  code: string;
  text: string;
  selected: boolean;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  sections: Section[] = [
    {code: 'INIT', text: 'Getting Started', selected: true},
    {code: 'AU', text: 'Búsqueda de Autor', selected: false},
    {code: 'MRAU', text: 'Búsqueda de Autores Relevantes', selected: false},
    {code: 'MRAR', text: 'Búsqueda de Artículos Relevantes', selected: false},
    {code: 'GRAPH', text: 'Grafos', selected: false},
  ]
  
  currentSection: string | undefined

  constructor(private activeRoute: ActivatedRoute) {
    this.currentSection = this.sections.find(section => section.selected)?.code;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(param => {
      const code = param['section']
      if (code) {
        this.setSection(code)
      }
    })
  }

  setSection(code: string) {
    this.currentSection = code
    this.sections = this.sections.map(section =>
      ({...section, selected: section.code === code})
    );
  }

}
