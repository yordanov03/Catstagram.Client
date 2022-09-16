import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatdetailsComponent } from './catdetails.component';

describe('CatdetailsComponent', () => {
  let component: CatdetailsComponent;
  let fixture: ComponentFixture<CatdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
