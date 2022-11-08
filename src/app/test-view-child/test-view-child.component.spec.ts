import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestViewChildComponent } from './test-view-child.component';

describe('TestViewChildComponent', () => {
  let component: TestViewChildComponent;
  let fixture: ComponentFixture<TestViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestViewChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
