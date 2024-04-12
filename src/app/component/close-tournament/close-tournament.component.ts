import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet, Router,RouterModule
} from '@angular/router';
import { TournamentApiService } from '../../tournament-api.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-close-tournament',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './close-tournament.component.html'
})
export class CloseTournamentComponent {
  tournamentId: string = '';
  pwd: string = '';
  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentApiService
  ) { }
  closeTournament(){
   this.tournamentId = this.route.snapshot.params['tournamentId'];
   this.tournamentService.closeTournament(this.tournamentId,this.pwd);
  }
}
