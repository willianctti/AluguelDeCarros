import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinesComponent } from './destines.component';

describe('DestinesComponent', () => {
  let component: DestinesComponent;
  let fixture: ComponentFixture<DestinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
