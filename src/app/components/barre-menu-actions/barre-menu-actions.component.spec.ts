import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreMenuActionsComponent } from './barre-menu-actions.component';

describe('BarreMenuActionsComponent', () => {
  let component: BarreMenuActionsComponent;
  let fixture: ComponentFixture<BarreMenuActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreMenuActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarreMenuActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
