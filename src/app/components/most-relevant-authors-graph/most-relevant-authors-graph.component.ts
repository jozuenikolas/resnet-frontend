import {Component, Input, SimpleChanges} from '@angular/core';
import {Link, Node} from "../../d3";
import {AuthorNode} from "../../interfaces/author.interface";
import {AuthorService} from "../../services/author.service";

@Component({
  selector: 'app-most-relevant-authors-graph',
  templateUrl: './most-relevant-authors-graph.component.html',
  styleUrls: ['./most-relevant-authors-graph.component.scss']
})
export class MostRelevantAuthorsGraphComponent {

  @Input() query: string

  d3Nodes: Node[]
  d3Links: Link[]

  apiNodes: AuthorNode[]

  forces: { manyBody: number, collide: number } = {manyBody: 1, collide: 50}

  showGraph: boolean = false

  authorsNumber: number = 50

  affiliations: { scopusId: number, name: string }[] = []

  selectedAffiliations: number[] = []

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.refreshGraph()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['query'] && !changes['query'].firstChange) {
      this.refreshGraph()
    }
  }

  getD3Nodes() {
    console.log("apiNodes", this.apiNodes)

    return this.apiNodes.map((node, index) => {
      return new Node(node.scopusId, this.apiNodes.length, node.initials, {
        enablePopover: true,
        title: 'Autor',
        content: node.firstName + " " + node.lastName,
        link: 'author/' + node.scopusId
      }, this.apiNodes.length - index)
    })
    /*this.apiNodes.forEach((node, index) => {
      this.d3Nodes.push(new Node(node.scopusId, this.apiNodes.length, node.initials, {
        enablePopover: true,
        title: 'Autor',
        content: node.firstName + " " + node.lastName,
        link: 'author/' + node.scopusId
      }, this.apiNodes.length - index))
    })
    console.log("d3Nodes", this.d3Nodes)*/
  }

  getD3Links(links: { source: number, target: number, collabStrength: number }[]) {

    return links.map(link => {
      this.d3Nodes[this.getIndexByScopusId(link.source)].degree++
      this.d3Nodes[this.getIndexByScopusId(link.target)].degree++
      return new Link(link.source, link.target, link.collabStrength * (4 + 1))
    })

    /*links.forEach(link => {
      this.d3Nodes[this.getIndexByScopusId(link.source)].degree++
      this.d3Nodes[this.getIndexByScopusId(link.target)].degree++
      this.d3Links.push(new Link(link.source, link.target, link.collabStrength * (4 + 1)))
    })
    console.log("d3Links", this.d3Links)*/
  }

  getIndexByScopusId(scopusId: any) {
    return this.apiNodes.map(node => node.scopusId).indexOf(scopusId)
  }

  onAuthorsNumberChange() {
    this.selectedAffiliations = []
    this.refreshGraph()
  }

  refreshGraph() {
    this.showGraph = false
    /*    this.d3Nodes = []
        this.d3Links = []
        this.apiNodes = []*/
    this.authorService.getMostRelevantAuthors(this.query, this.authorsNumber).subscribe((coauthors) => {
      this.affiliations = coauthors.affiliations
      this.apiNodes = coauthors.nodes
      this.d3Nodes = this.getD3Nodes()
      this.d3Links = this.getD3Links(coauthors.links)
      this.showGraph = true
    })
  }

  onClickCheckbox(event: any) {
    let item = Number(event.target.id)
    if (event.target.checked) {
      this.selectedAffiliations.push(item)
    } else {
      this.selectedAffiliations.splice(this.selectedAffiliations.indexOf(item), 1)
    }
    console.log("selectedAffiliations", this.selectedAffiliations)
  }

  onClickAffiliationsFilter(type: string) {
    this.showGraph = false
    /*this.d3Nodes = []
    this.d3Links = []
    this.apiNodes = []*/
    this.authorService.getMostRelevantAuthors(this.query, this.authorsNumber, type, this.selectedAffiliations).subscribe((coauthors) => {
      this.apiNodes = coauthors.nodes
      this.d3Nodes = this.getD3Nodes()
      this.d3Links = this.getD3Links(coauthors.links)
      this.showGraph = true
    })
  }

}
