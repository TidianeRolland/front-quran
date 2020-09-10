import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecitatorPageComponent } from './recitator-page.component';

describe('RecitatorPageComponent', () => {
  let component: RecitatorPageComponent;
  let fixture: ComponentFixture<RecitatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecitatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecitatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
