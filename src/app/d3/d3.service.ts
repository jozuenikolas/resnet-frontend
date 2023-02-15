import {Injectable} from '@angular/core';
import {ForceDirectedGraph, Link, Node} from './models';
import * as d3 from 'd3';

@Injectable()
export class D3Service {
  /** This service will provide methods to enable user interaction with elements
   * while maintaining the d3 simulations physics
   */
  constructor() {
  }

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(svgElement, containerElement) {
    let svg, container, zoom;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    function zoomed(e) {
      const transform = e.transform;
      container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
    }

    zoom = d3.zoom().on('zoom', zoomed);
    svg.call(zoom);
  }

  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(element, node: Node, graph: ForceDirectedGraph) {
    const d3element = d3.select(element);

    function started(e) {
      /** Preventing propagation of dragstart to parent elements */
      e.sourceEvent.stopPropagation();

      if (!e.active) {
        graph.simulation.alphaTarget(0.3).restart();
      }

      e.on('drag', dragged).on('end', ended);

      function dragged(e) {
        node.fx = e.x;
        node.fy = e.y;
      }

      function ended(e) {
        if (!e.active) {
          graph.simulation.alphaTarget(0);
        }

        node.fx = null;
        node.fy = null;
      }
    }

    d3element.call(d3.drag()
      .on('start', started));
  }


  /** The interactable graph we will simulate in this article
   * This method does not interact with the document, purely physical calculations with d3
   */
  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height }) {
    return new ForceDirectedGraph(nodes, links, options);
  }
}
