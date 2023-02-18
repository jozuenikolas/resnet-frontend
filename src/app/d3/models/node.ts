import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  totalNodes: number = 0

  id: string | number;
  degree: number = 0;
  label: string

  popover: PopoverNode

  constructor(id: string | number, totalNodes: number, label: string, popover: PopoverNode) {
    this.id = id;
    this.totalNodes = totalNodes
    this.label = label
    this.popover = popover
  }
  normal = () => {
    return Math.sqrt(this.degree / this.totalNodes);
  }

  get r() {
    return this.normal() === 0 ? 60 : 50 * this.normal() + 10;
  }

  get fontSize() {
    return this.normal() === 0 ? 40 : (30 * this.normal() + 10) + 'px';
  }

  get color() {
    let index = Math.ceil((this.degree * (APP_CONFIG.SPECTRUM.length - 1)) / (this.totalNodes - 1))
    return APP_CONFIG.SPECTRUM[index];
  }
}

export interface PopoverNode {
  enablePopover: boolean
  title?: string
  content?: string
  link?: string
}
