import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlateComponent } from './home-plate.component';

describe('HomePlateComponent', () => {
  let component: HomePlateComponent;
  let fixture: ComponentFixture<HomePlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
