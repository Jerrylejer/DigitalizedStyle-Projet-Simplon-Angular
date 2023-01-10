import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCategorieCardComponent } from './one-categorie-card.component';

describe('OneCategorieCardComponent', () => {
  let component: OneCategorieCardComponent;
  let fixture: ComponentFixture<OneCategorieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCategorieCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneCategorieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
