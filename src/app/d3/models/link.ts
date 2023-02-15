import {Node} from './';

export class Link implements d3.SimulationLinkDatum<Node> {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;

  // must - defining enforced implementation properties
  source: Node;
  target: Node;

  collabStrength: number

  constructor(source, target, collabStrength?) {
    this.source = source;
    this.target = target;
    this.collabStrength = Number(collabStrength)
    /*console.log("source", this.source)
    console.log("target", this.target)*/
  }
}
