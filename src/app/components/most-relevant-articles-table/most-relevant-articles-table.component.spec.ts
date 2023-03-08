import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRelevantArticlesTableComponent } from './most-relevant-articles-table.component';

describe('MostRelevantArticlesTableComponent', () => {
  let component: MostRelevantArticlesTableComponent;
  let fixture: ComponentFixture<MostRelevantArticlesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostRelevantArticlesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostRelevantArticlesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
