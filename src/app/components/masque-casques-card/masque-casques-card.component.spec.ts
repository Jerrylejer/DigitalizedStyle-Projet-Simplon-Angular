import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasqueCasquesCardComponent } from './masque-casques-card.component';

describe('MasqueCasquesCardComponent', () => {
  let component: MasqueCasquesCardComponent;
  let fixture: ComponentFixture<MasqueCasquesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasqueCasquesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasqueCasquesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
