// tournament.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentApiService {
  private baseUrl = 'http://localhost:yourport/api'; // Remplacez yourport par le port de votre API

  constructor(private http: HttpClient) { }

  // Méthodes pour interagir avec l'API

  // Créer un tournoi
  createTournament(tournamentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/tournaments`, tournamentData);
  }

  // Récupérer tous les tournois
  getTournaments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments`);
  }

  // Récupérer un tournoi par son ID
  getTournamentById(tournamentId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments/${tournamentId}`);
  }

  // Inscrire un joueur à un tournoi
  registerPlayer(tournamentId: string, playerId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/tournaments/${tournamentId}/register/${playerId}`, {});
  }

  // Désinscrire un joueur d'un tournoi
  unregisterPlayer(tournamentId: string, playerId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tournaments/${tournamentId}/unregister/${playerId}`);
  }

  // Lancer un tournoi
  launchTournament(tournamentId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/tournaments/${tournamentId}/launch`, {});
  }

  // Fermer un tournoi
  closeTournament(tournamentId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/tournaments/${tournamentId}/close`, {});
  }

}
