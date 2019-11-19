import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalExampleComponent } from './minimal-example.component';

describe('MinimalExampleComponent', () => {
  let component: MinimalExampleComponent;
  let fixture: ComponentFixture<MinimalExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
