import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreVioletteComponent } from './barre-violette.component';

describe('BarreVioletteComponent', () => {
  let component: BarreVioletteComponent;
  let fixture: ComponentFixture<BarreVioletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreVioletteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarreVioletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
