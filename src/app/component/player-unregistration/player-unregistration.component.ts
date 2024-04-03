import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentApiService } from '../../service/api-management/tournament-api.service';

@Component({
  selector: 'app-player-unregistration',
  templateUrl: './player-unregistration.component.html',
  standalone: true,
  styleUrls: ['./player-unregistration.component.css']
})
export class PlayerUnregistrationComponent implements OnInit {
  tournamentId: string = ''; // Variable pour stocker l'ID du tournoi

  constructor(
    private route: ActivatedRoute,
    private tournamentApiService: TournamentApiService
  ) { }

  ngOnInit(): void {
    // Utilisation de ActivatedRoute pour récupérer l'ID du tournoi de l'URL via la méthode snapshot
    this.tournamentId = this.route.snapshot.params['tournamentId'];
    // Appel à une méthode pour charger les joueurs inscrits
    this.loadRegisteredPlayers();
  }

  loadRegisteredPlayers() {
    // Utilisez this.tournamentId pour récupérer les joueurs inscrits à ce tournoi
    this.tournamentApiService.getRegisteredPlayers(this.tournamentId).subscribe(
      (players: any[]) => {
        // Traitez la liste des joueurs inscrits ici
      },
      (error) => {
        console.error('Une erreur s\'est produite lors du chargement des joueurs inscrits :', error);
        // Gérer les erreurs de chargement des joueurs inscrits ici
      }
    );
  }

  unregisterPlayer(playerId: string) {
    this.tournamentApiService.unregisterPlayer(this.tournamentId, playerId).subscribe(
      (response) => {
        console.log('Joueur désinscrit avec succès !');
        // Ajoutez ici la logique de mise à jour de l'interface utilisateur si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la désinscription du joueur :', error);
        // Gérer les erreurs de désinscription du joueur ici
      }
    );
  }
}
