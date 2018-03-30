import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AminComponent } from './amin.component';

describe('AminComponent', () => {
  let component: AminComponent;
  let fixture: ComponentFixture<AminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
