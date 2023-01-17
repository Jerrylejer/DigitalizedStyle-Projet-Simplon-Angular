import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieProduitComponent } from './galerie-produit.component';

describe('GalerieProduitComponent', () => {
  let component: GalerieProduitComponent;
  let fixture: ComponentFixture<GalerieProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalerieProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
