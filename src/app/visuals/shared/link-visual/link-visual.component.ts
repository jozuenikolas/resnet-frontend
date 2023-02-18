import { Component, Input } from '@angular/core';
import { Link } from '../../../d3';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line (click)="onAristeClick()"
              style="stroke-width:{{link.strokeWidth}}; stroke: rgb(0, 0, 0)"
              [attr.x1]="link.source.x"
              [attr.y1]="link.source.y"
              [attr.x2]="link.target.x"
              [attr.y2]="link.target.y"
    ></svg:line>
  `,
  styleUrls: ['./link-visual.component.scss']
})
export class LinkVisualComponent  {
  @Input('linkVisual') link: Link;

  onAristeClick(){
    console.log(this.link.strokeWidth)
  }
}
