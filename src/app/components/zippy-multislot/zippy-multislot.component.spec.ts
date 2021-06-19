import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyMultislotComponent } from './zippy-multislot.component';

describe('ZippyMultislotComponent', () => {
  let component: ZippyMultislotComponent;
  let fixture: ComponentFixture<ZippyMultislotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippyMultislotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyMultislotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
