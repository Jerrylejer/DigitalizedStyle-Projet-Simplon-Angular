import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasqueCasquesComponent } from './masque-casques.component';

describe('MasqueCasquesComponent', () => {
  let component: MasqueCasquesComponent;
  let fixture: ComponentFixture<MasqueCasquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasqueCasquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasqueCasquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
