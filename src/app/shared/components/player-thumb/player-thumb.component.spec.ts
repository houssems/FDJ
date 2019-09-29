import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerThumbComponent } from './player-thumb.component';

describe('PlayerThumbComponent', () => {
  let component: PlayerThumbComponent;
  let fixture: ComponentFixture<PlayerThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
