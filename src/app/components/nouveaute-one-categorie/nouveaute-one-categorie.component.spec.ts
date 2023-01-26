import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauteOneCategorieComponent } from './nouveaute-one-categorie.component';

describe('NouveauteOneCategorieComponent', () => {
  let component: NouveauteOneCategorieComponent;
  let fixture: ComponentFixture<NouveauteOneCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauteOneCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauteOneCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
