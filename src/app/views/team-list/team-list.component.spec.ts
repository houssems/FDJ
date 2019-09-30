import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListComponent } from './team-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThesportsdbApiService } from 'src/app/shared/services/api/thesportsdb-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MockComponent } from 'ng-mocks';
import { TeamThumbComponent } from 'src/app/shared/components/team-thumb/team-thumb.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;

  const thesportsdbApiService = jasmine.createSpyObj('ThesportsdbApiService', ['getTeamsByLeague']);
  const router = jasmine.createSpyObj('Router', ['navigate']);
  const route = {
    queryParamMap: of({ get: (key: string) => 'Premiere League' })
  }

  thesportsdbApiService.getTeamsByLeague.and.returnValue(of([]));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        TeamListComponent,
        MockComponent(TeamThumbComponent)
      ],
      providers: [
        {
          provide: ThesportsdbApiService,
          useValue: thesportsdbApiService
        }, {
          provide: ActivatedRoute,
          useValue: route
        }, {
          provide: Router,
          useValue: router
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should prevent calling WS if search bar is empty', () => {
    const submitBtn = fixture.debugElement.query(By.css('.btn'));
    submitBtn.triggerEventHandler('click', null);
    expect(component.form.status).toBe('INVALID');
    expect(router.navigate.calls.count()).toBe(0);
  });

  it('should permit calling WS if search bar is not empty', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const submitBtn = fixture.debugElement.query(By.css('.btn'));
    submitBtn.triggerEventHandler('click', null);
    expect(component.form.status).toBe('VALID');

  });
});