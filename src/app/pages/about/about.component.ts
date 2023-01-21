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

  ngAfterViewChecked(): void {
    this.activeRoute.params.subscribe(param => {
      const id = param['section']
      if (id) {
        const yOffset = -90;
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top + yOffset > 0) {
          window.scrollTo({top: element.getBoundingClientRect().top + yOffset, behavior: 'smooth'});
        }
      }
    })
  }

}
