import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { TournamentApiService } from '../../tournament-api.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-player-unregistration',
  templateUrl: './player-unregistration.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule]

})
export class PlayerUnregistrationComponent implements OnInit {
  tournamentId: string = '';
  nom: string = '';
  prenom: string = '';
  constructor(
    private route: ActivatedRoute,
    private tournamentApiService: TournamentApiService
  ) { }

  ngOnInit(): void {
    this.tournamentId = this.route.snapshot.params['tournamentId'];
  }

  unregisterPlayer() {
    this.tournamentApiService.unregisterPlayer(this.tournamentId, this.nom, this.prenom).subscribe(
      (response) => {
        console.log('Joueur désinscrit avec succès !');
      },
      (error) => {
        console.error('Erreur lors de la désinscription du joueur :', error);
      }
    );
  }
}
