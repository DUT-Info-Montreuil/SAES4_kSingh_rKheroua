import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentUnregistrationComponent } from './tournament-unregistration.component';

describe('TournamentUnregistrationComponent', () => {
  let component: TournamentUnregistrationComponent;
  let fixture: ComponentFixture<TournamentUnregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentUnregistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentUnregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
