import {Component, Input} from '@angular/core';
import {Node} from '../../../d3';

@Component({
  selector: '[nodeVisual]',
  template: `
    <ng-template #popTitle>{{node.popover.title}}</ng-template>
    <ng-template #popContent>{{node.popover.content}}</ng-template>


    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'"
           [ngbPopover]="popContent"
           [popoverTitle]="popTitle"
           triggers="manual"
           #p1="ngbPopover"
           (click)="togglePopover(p1)"
           container="body">
      <svg:circle
        class="node"
        [attr.fill]="node.color"
        cx="0"
        cy="0"
        [attr.r]="node.r">
      </svg:circle>
      <svg:text
        class="node-name"
        [attr.font-size]="node.fontSize">
        {{node.label ? node.label : node.id}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.scss']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;

  name = 'World';

  toggleWithGreeting(popover, greeting: string, language: string) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open({greeting, language});
    }
  }

  togglePopover(popover) {
    if (this.node.popover.enablePopover) {
      if (popover.isOpen()) {
        popover.close();
      } else {
        popover.open();
      }
    }
  }
}
