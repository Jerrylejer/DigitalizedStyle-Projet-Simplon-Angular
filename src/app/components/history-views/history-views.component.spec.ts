import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryViewsComponent } from './history-views.component';

describe('HistoryViewsComponent', () => {
  let component: HistoryViewsComponent;
  let fixture: ComponentFixture<HistoryViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
