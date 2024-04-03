// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentListComponent } from './component/tournament-list/tournament-list.component';
import { TournamentDetailComponent } from './component/tournament-detail/tournament-detail.component';
import { PlayerRegistrationComponent } from './component/player-registration/player-registration.component';
import { PlayerUnregistrationComponent } from './component/player-unregistration/player-unregistration.component';

export const routes: Routes = [
  { path: 'tournaments', component: TournamentListComponent },
  { path: 'tournament/:id', component: TournamentDetailComponent },
  { path: 'player-registration', component: PlayerRegistrationComponent },
  { path: 'player-unregistration', component: PlayerUnregistrationComponent },
  // Ajoutez d'autres routes au besoin

];

