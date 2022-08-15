import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectLoopComponent } from './object-loop.component';

describe('ObjectLoopComponent', () => {
  let component: ObjectLoopComponent;
  let fixture: ComponentFixture<ObjectLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectLoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
