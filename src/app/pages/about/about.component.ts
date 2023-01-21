import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {


  constructor(private activeRoute: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    this.activeRoute.params.subscribe(param => {
      if (param['section']) {
        const id = param['section']
        const yOffset = -675;
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }
    })
  }

}
