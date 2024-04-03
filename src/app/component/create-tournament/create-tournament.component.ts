import { Component } from '@angular/core';
import { TournamentApiService } from '../../service/api-management/tournament-api.service';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  standalone: true,
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent {
  tournamentData: any = {
    name: '',
    date: '',
    nbTables: 0,
    duration: 0,
    format: '',
    location: '',
    description: '',
    password: ''
  };

  constructor(private tournamentApiService: TournamentApiService) { }

  createTournament() {
    this.tournamentApiService.createTournament(this.tournamentData).subscribe(
      (response) => {
        console.log('Tournoi créé avec succès !');
        // Ajoutez ici la redirection vers la page de détails du tournoi nouvellement créé, ou tout autre traitement nécessaire
      },
      (error) => {
        console.error('Erreur lors de la création du tournoi :', error);
        // Gérer les erreurs de création du tournoi ici
      }
    );
  }
}
