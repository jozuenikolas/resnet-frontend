import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoauthorsGraphComponent } from './coauthors-graph.component';

describe('CoauthorsGraphComponent', () => {
  let component: CoauthorsGraphComponent;
  let fixture: ComponentFixture<CoauthorsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoauthorsGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoauthorsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
