import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentApiService } from '../../tournament-api.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  standalone: true,
  imports: [
    FormsModule
  ]
})
export class PlayerRegistrationComponent {
  playerName: string = '';
  playerFirstName: string = '';
  playerAge: number = 0;
  playerLevel: string = '';
  playerEmail: string = '';

  constructor(private tournamentService: TournamentApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  registerPlayer() {
    const playerData = {
      nom: this.playerName,
      prenom: this.playerFirstName,
      age: this.playerAge,
      niveau: this.playerLevel,
      email: this.playerEmail,
      tournois: this.route.snapshot.params['tournamentId']
    };

    this.tournamentService.registerPlayer(playerData).subscribe(response => {
      console.log('Joueur inscrit avec succès !');
    }, error => {
      console.error('Erreur lors de l\'inscription du joueur :', error);
    });
  }
}
