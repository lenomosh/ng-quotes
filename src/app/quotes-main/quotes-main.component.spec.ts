import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesMainComponent } from './quotes-main.component';

describe('QuotesMainComponent', () => {
  let component: QuotesMainComponent;
  let fixture: ComponentFixture<QuotesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
