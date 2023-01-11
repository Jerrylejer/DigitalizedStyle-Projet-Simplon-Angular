import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCategorieComponent } from './one-categorie.component';

describe('OneCategorieComponent', () => {
  let component: OneCategorieComponent;
  let fixture: ComponentFixture<OneCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
