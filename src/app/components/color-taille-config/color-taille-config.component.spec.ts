import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTailleConfigComponent } from './color-taille-config.component';

describe('ColorTailleConfigComponent', () => {
  let component: ColorTailleConfigComponent;
  let fixture: ComponentFixture<ColorTailleConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorTailleConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorTailleConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
