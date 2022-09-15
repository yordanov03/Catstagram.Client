import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcatsComponent } from './listcats.component';

describe('ListcatsComponent', () => {
  let component: ListcatsComponent;
  let fixture: ComponentFixture<ListcatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
