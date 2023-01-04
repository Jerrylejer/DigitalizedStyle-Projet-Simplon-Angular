import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPrincipalesComponent } from './categories-principales.component';

describe('CategoriesPrincipalesComponent', () => {
  let component: CategoriesPrincipalesComponent;
  let fixture: ComponentFixture<CategoriesPrincipalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesPrincipalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
