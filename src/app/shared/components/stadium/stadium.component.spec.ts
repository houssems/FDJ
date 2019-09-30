import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumComponent } from './stadium.component';
import { By } from '@angular/platform-browser';

describe('StadiumComponent', () => {
  let component: StadiumComponent;
  let fixture: ComponentFixture<StadiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumComponent);
    component = fixture.componentInstance;
    component.team = {
      idTeam: '1234',
      strTeam: 'FCB',
      strStadium: 'Camp nou',
      intStadiumCapacity: '50',
      strStadiumLocation: 'Barcelona'
    }
    fixture.detectChanges();
  });

  it('should print stadium informations', () => {
    const stadiumDetailsTag = fixture.debugElement.queryAll(By.css('.team__stadium--details div'));
    expect(stadiumDetailsTag[0].nativeElement.textContent).toContain('Camp nou');
    expect(stadiumDetailsTag[1].nativeElement.textContent).toContain('Barcelona');
  });
});
