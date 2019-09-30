import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamThumbComponent } from './team-thumb.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('TeamThumbComponent', () => {
  let component: TeamThumbComponent;
  let fixture: ComponentFixture<TeamThumbComponent>;
  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamThumbComponent ],
      providers: [
        {
          provide: Router,
          useValue: router
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamThumbComponent);
    component = fixture.componentInstance;
    component.team = {
      idTeam: '1234',
      strTeam: 'FCB'
    };
    fixture.detectChanges();
  });

  it('should display team name', () => {
    const teamTag = fixture.debugElement.query(By.css('.team'));
    expect(teamTag.nativeElement.textContent).toContain('FCB');
  });

  it('should navigate to team details when clicking', () => {
    router.navigate.calls.reset()
    const teamTag = fixture.debugElement.query(By.css('.team'));
    teamTag.triggerEventHandler('click', null);
    expect(router.navigate.calls.count()).toBe(1, 'navigation service should be called when clicking');
  });
});
