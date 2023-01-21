import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  timeScroll: number = 0

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngAfterViewChecked(): void {
    this.timeScroll = this.timeScroll + 1
    if (this.timeScroll < 3) {
      this.activeRoute.params.subscribe(param => {
        const id = param['section']
        if (id) {
          const yOffset = -90;
          const element = document.getElementById(id);
          if (element && window.pageYOffset == 0) {
            window.scrollTo({top: element.getBoundingClientRect().top + yOffset, behavior: 'smooth'});
          }
        }
      })
    }
  }

}
