import { Component } from '@angular/core';
import { TournamentApiService } from '../../tournament-api.service';
import {FormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import {Tournament} from "../../Tournament";
@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  standalone: true,
  imports: [
    FormsModule
  ]
})
export class CreateTournamentComponent {
  tournamentData: Tournament = {
    name: '',
    date: '',
    nbTables: 0,
    duree: 0,
    format: '',
    salle: '',
    description: '',
    pwd: '',
    lieu: ''
  };

  constructor(private tournamentApiService: TournamentApiService, private router: Router) {
  }

  ngOnInit() {

  }

  createTournament() {
    this.router.navigate(['tournaments']);
    console.log('Tournament about to be created');
    this.tournamentApiService.createTournament(this.tournamentData).subscribe(tournamentData => {
      this.tournamentData = tournamentData
    });
    console.log('Tournament created !');
    /*(response) => {
      console.log('Tournoi créé avec succès !');
      // Ajoutez ici la redirection vers la page de détails du tournoi nouvellement créé, ou tout autre traitement nécessaire
    },
    (error) => {
      console.error('Erreur lors de la création du tournoi :', error);
      // Gérer les erreurs de création du tournoi ici
    */

  }
}


