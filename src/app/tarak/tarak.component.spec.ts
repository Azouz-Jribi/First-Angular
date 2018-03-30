import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarakComponent } from './tarak.component';

describe('TarakComponent', () => {
  let component: TarakComponent;
  let fixture: ComponentFixture<TarakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
