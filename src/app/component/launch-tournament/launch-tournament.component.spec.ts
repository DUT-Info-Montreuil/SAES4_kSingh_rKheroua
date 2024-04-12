import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchTournamentComponent } from './launch-tournament.component';

describe('LaunchTournamentComponent', () => {
  let component: LaunchTournamentComponent;
  let fixture: ComponentFixture<LaunchTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchTournamentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaunchTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
