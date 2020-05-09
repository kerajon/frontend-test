import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobiroButtonComponent } from './cobiro-button.component';

describe('CobiroButtonComponent', () => {
  let component: CobiroButtonComponent;
  let fixture: ComponentFixture<CobiroButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobiroButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobiroButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
