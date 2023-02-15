import {Component, Input} from '@angular/core';
import {Link, Node} from "../../d3";
import {AuthorService} from "../../services/author.service";
import {Author} from "../../interfaces/author.interface";

@Component({
  selector: 'app-coauthors-graph',
  templateUrl: './coauthors-graph.component.html',
  styleUrls: ['./coauthors-graph.component.scss']
})
export class CoauthorsGraphComponent {

  @Input() author: Author

  d3Nodes: Node[] = []
  d3Links: Link[] = []

  apiNodes: { scopusId: string, initials: string, firstName: string, lastName: string }[] = []

  showGraph: boolean = false

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.authorService.getCoauthorsById(this.author.scopusId).subscribe((coauthors) => {
      this.apiNodes = coauthors.nodes
      this.apiNodes.push({
        scopusId: this.author.scopusId.toString(),
        initials: this.author.initials,
        firstName: this.author.firstName,
        lastName: this.author.lastName
      })
      this.setupNodes()
      this.setupLinks(coauthors.links)
      this.showGraph = true
    })
  }

  setupNodes() {
    this.apiNodes.forEach(node => {
      this.d3Nodes.push(new Node(node.scopusId, this.apiNodes.length, node.initials, {
        enablePopover: true,
        title: 'Autor',
        content: node.firstName + " " + node.lastName
      }))
    })
    console.log(this.d3Nodes)
  }

  setupLinks(links: { source: string, target: string, collabStrength: string }[]) {
    links.forEach(link => {
      this.d3Nodes[this.getIndexByScopusId(link.source)].linkCount++
      this.d3Nodes[this.getIndexByScopusId(link.target)].linkCount++
      this.d3Links.push(new Link(link.source, link.target, link.collabStrength))
    })
    console.log(this.d3Links)
  }

  getIndexByScopusId(scopusId: any) {
    return this.apiNodes.map(node => node.scopusId).indexOf(scopusId)
  }
}
