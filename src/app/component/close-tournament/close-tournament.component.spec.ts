import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseTournamentComponent } from './close-tournament.component';

describe('CloseTournamentComponent', () => {
  let component: CloseTournamentComponent;
  let fixture: ComponentFixture<CloseTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseTournamentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloseTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
