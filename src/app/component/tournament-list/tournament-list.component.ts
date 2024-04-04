import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { TournamentApiService } from '../../tournament-api.service';
//import { PlayerRegistrationComponent } from '../player-registration/player-registration.component';
//import { PlayerUnregistrationComponent } from '../player-unregistration/player-unregistration.component';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  standalone: true,
  imports: [ CommonModule, RouterModule ]
})

export class TournamentListComponent implements OnInit {
  tournaments: any[] = [];

  constructor(
    private tournamentService: TournamentApiService
    //private playerRegistrationComponent: PlayerRegistrationComponent,
    //private playerUnregistrationComponent: PlayerUnregistrationComponent
  ) { }

  ngOnInit(): void {
    this.getTournaments();
  }

  getTournaments() {
    this.tournamentService.getTournaments().subscribe((data: any[]) => {
      this.tournaments = data;
    });
  }

  register(tournamentId: string) {

  }

  unregister(tournamentId: string) {
  }

  launch(tournamentId: string) {
    this.tournamentService.launchTournament(tournamentId).subscribe(() => {
      console.log('Tournament launched successfully!');
      // Ajoutez ici la logique de mise à jour de l'interface utilisateur si nécessaire
    }, error => {
      console.error('Error launching tournament:', error);
      // Gérer les erreurs de lancement du tournoi ici
    });
  }

  close(tournamentId: string) {
    this.tournamentService.closeTournament(tournamentId).subscribe(() => {
      console.log('Tournament closed successfully!');
      // Ajoutez ici la logique de mise à jour de l'interface utilisateur si nécessaire
    }, error => {
      console.error('Error closing tournament:', error);
      // Gérer les erreurs de fermeture du tournoi ici
    });
  }
}
