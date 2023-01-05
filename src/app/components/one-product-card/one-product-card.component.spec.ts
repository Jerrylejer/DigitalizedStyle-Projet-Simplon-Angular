import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProductCardComponent } from './one-product-card.component';

describe('OneProductCardComponent', () => {
  let component: OneProductCardComponent;
  let fixture: ComponentFixture<OneProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
