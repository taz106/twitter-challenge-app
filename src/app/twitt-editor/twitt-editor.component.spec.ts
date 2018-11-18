import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittEditorComponent } from './twitt-editor.component';

describe('TwittEditorComponent', () => {
  let component: TwittEditorComponent;
  let fixture: ComponentFixture<TwittEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwittEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
