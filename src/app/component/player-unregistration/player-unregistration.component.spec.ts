import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerUnregistrationComponent } from './player-unregistration.component';

describe('PlayerUnregistrationComponent', () => {
  let component: PlayerUnregistrationComponent;
  let fixture: ComponentFixture<PlayerUnregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerUnregistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerUnregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
