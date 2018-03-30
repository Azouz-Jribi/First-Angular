import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzouzComponent } from './azouz.component';

describe('AzouzComponent', () => {
  let component: AzouzComponent;
  let fixture: ComponentFixture<AzouzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzouzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzouzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
