import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTopHomeComponent } from './module-top-home.component';

describe('ModuleTopHomeComponent', () => {
  let component: ModuleTopHomeComponent;
  let fixture: ComponentFixture<ModuleTopHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTopHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleTopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
