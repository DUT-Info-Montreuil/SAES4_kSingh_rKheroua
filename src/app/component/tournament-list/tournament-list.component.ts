// tournament-list.component.ts

import { Component, OnInit } from '@angular/core';
import { TournamentApiService } from '../../service/api-management/tournament-api.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  standalone: true,
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  tournaments: any[] = [];

  constructor(private tournamentService: TournamentApiService) { }

  ngOnInit(): void {
    this.getTournaments();
  }

  getTournaments() {
    this.tournamentService.getTournaments().subscribe((data: any) => {
      this.tournaments = data;
    });
  }

  register(tournamentId: string) {
    // Mettez ici la logique pour inscrire un joueur au tournoi
    console.log('Inscription au tournoi', tournamentId);
  }

  unregister(tournamentId: string) {
    // Mettez ici la logique pour désinscrire un joueur du tournoi
    console.log('Désinscription du tournoi', tournamentId);
  }

  launch(tournamentId: string) {
    // Mettez ici la logique pour lancer le tournoi
    console.log('Lancement du tournoi', tournamentId);
  }

  close(tournamentId: string) {
    // Mettez ici la logique pour fermer le tournoi
    console.log('Fermeture du tournoi', tournamentId);
  }
}
