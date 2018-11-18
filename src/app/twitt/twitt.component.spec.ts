import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittComponent } from './twitt.component';

describe('TwittComponent', () => {
  let component: TwittComponent;
  let fixture: ComponentFixture<TwittComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwittComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
