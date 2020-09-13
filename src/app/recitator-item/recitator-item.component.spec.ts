import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecitatorItemComponent } from './recitator-item.component';

describe('RecitatorItemComponent', () => {
  let component: RecitatorItemComponent;
  let fixture: ComponentFixture<RecitatorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecitatorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecitatorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
