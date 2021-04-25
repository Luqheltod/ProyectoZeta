import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapiroComponent } from './papiro.component';

describe('PapiroComponent', () => {
  let component: PapiroComponent;
  let fixture: ComponentFixture<PapiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
