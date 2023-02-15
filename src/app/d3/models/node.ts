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

  id: string;
  linkCount: number = 0;
  label: string


  popover: {
    enablePopover: boolean
    title?: string
    content?: string
  }

  constructor(id, totalNodes, label?, popover?) {
    this.id = id;
    this.totalNodes = totalNodes
    this.label = label
    this.popover = popover
  }

  normal = () => {
    return Math.sqrt(this.linkCount / this.totalNodes);
  }

  get r() {
    return this.normal() === 0? 60: 50 * this.normal() + 10;
  }

  get fontSize() {
    return '20px';
  }

  get color() {
    // let index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
    let index = Math.ceil(APP_CONFIG.SPECTRUM.length * (this.linkCount / this.totalNodes));
    return APP_CONFIG.SPECTRUM[index - 1];
  }
}
