import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittTableComponent } from './twitt-table.component';

describe('TwittTableComponent', () => {
  let component: TwittTableComponent;
  let fixture: ComponentFixture<TwittTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwittTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
