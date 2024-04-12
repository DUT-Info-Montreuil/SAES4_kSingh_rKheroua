import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Tournament} from "./Tournament";

@Injectable({
  providedIn: 'root'
})



export class TournamentApiService {
  private baseUrl = 'http://127.0.0.1:5000/api';

  constructor(private http: HttpClient) { }

  createTournament(tournamentData: Tournament): Observable<any> {
    return this.http.post(`${this.baseUrl}/tournois/cree`, tournamentData);
  }

  // Récupérer tous les tournois
  getTournaments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournois/recherche_tout/`);
  }

  // Récupérer un tournoi par son ID
  getTournamentById(tournamentId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments/${tournamentId}`);
  }

  // Inscrire un joueur à un tournoi
  registerPlayer(playerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/tournaments/joueurs/cree`, playerData);
  }

  // Désinscrire un joueur d'un tournoi
  unregisterPlayer(tournamentId: string, nom: string,prenom: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tournaments/${tournamentId}/unregister/${nom}`);
  }

  // Lancer un tournoi
  launchTournament(tournamentId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/poules/cree/${tournamentId}`,{});
  }

  // Fermer un tournoi
  closeTournament(tournamentId: string,pwd: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/tournaments/${tournamentId}/${pwd}`, {});
  }

  getDetail(tournamentId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/poules/rechercher/${tournamentId}`, {})
  }
}
