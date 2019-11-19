import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedExampleComponent } from './advanced-example.component';

describe('AdvancedExampleComponent', () => {
  let component: AdvancedExampleComponent;
  let fixture: ComponentFixture<AdvancedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
