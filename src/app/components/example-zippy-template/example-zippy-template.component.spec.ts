import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleZippyTemplateComponent } from './example-zippy-template.component';

describe('ExampleZippyTemplateComponent', () => {
  let component: ExampleZippyTemplateComponent;
  let fixture: ComponentFixture<ExampleZippyTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleZippyTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleZippyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
