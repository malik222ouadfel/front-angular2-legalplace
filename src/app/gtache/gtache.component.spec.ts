import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtacheComponent } from './gtache.component';

describe('GtacheComponent', () => {
  let component: GtacheComponent;
  let fixture: ComponentFixture<GtacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
