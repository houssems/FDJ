import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamThumbComponent } from './team-thumb.component';

describe('TeamThumbComponent', () => {
  let component: TeamThumbComponent;
  let fixture: ComponentFixture<TeamThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
