import { Component } from '@angular/core';
import { TournamentApiService } from '../../service/api-management/tournament-api.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./player-registration.component.css']
})
export class PlayerRegistrationComponent {
  IDPlayer: string = '';
  playerName: string = '';
  playerFirstName: string = '';
  playerAge: number = 0;
  playerLevel: string = '';
  playerEmail: string = '';

  constructor(private tournamentService: TournamentApiService) { }

  registerPlayer() {
    const playerData = {
      id: this.IDPlayer,
      nom: this.playerName,
      prenom: this.playerFirstName,
      age: this.playerAge,
      niveau: this.playerLevel,
      email: this.playerEmail
    };

    this.tournamentService.registerPlayer('1',playerData.id).subscribe(response => {
      console.log('Joueur inscrit avec succès !');
      // Réinitialiser les champs du formulaire après inscription réussie si nécessaire
    }, error => {
      console.error('Erreur lors de l\'inscription du joueur :', error);
      // Gérer les erreurs d'inscription du joueur ici
    });
  }
}