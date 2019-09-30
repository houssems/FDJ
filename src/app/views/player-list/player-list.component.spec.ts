import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListComponent } from './player-list.component';
import { MockComponent } from 'ng-mocks';
import { StadiumComponent } from 'src/app/shared/components/stadium/stadium.component';
import { PlayerThumbComponent } from 'src/app/shared/components/player-thumb/player-thumb.component';
import { of } from 'rxjs';
import { ThesportsdbApiService } from 'src/app/shared/services/api/thesportsdb-api.service';
import { ActivatedRoute } from '@angular/router';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;

  const thesportsdbApiService = jasmine.createSpyObj('ThesportsdbApiService', ['getTeam', 'getPlayersByTeam']);
  const route = {
    snapshot: {
      paramMap: {
        get: (key: string) => key === 'name' ? 'FCB': '1234'
      }
    }
  }
  
  thesportsdbApiService.getTeam.and.returnValue(of({
    idLeague: "4328",
    idSoccerXML: "9",
    idTeam: "133604",
    intFormedYear: "1892",
    intLoved: "2",
    intStadiumCapacity: "60338",
    strAlternate: "Gunners",
    strCountry: "England",
    strTeam: "Arsenal"
  }));

  thesportsdbApiService.getPlayersByTeam.and.returnValue(of([]));

 


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayerListComponent,
        MockComponent(StadiumComponent),
        MockComponent(PlayerThumbComponent)
      ],
      providers: [
        {
          provide: ThesportsdbApiService,
          useValue: thesportsdbApiService
        }, {
          provide: ActivatedRoute,
          useValue: route
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init component with query params value', () => {
    expect(thesportsdbApiService.getTeam.calls.count()).toBe(1);
    expect(thesportsdbApiService.getPlayersByTeam.calls.count()).toBe(1);
  });
});
