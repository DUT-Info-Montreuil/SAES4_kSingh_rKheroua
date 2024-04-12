import { Routes} from '@angular/router';
import { TournamentListComponent } from './component/tournament-list/tournament-list.component';
import { TournamentDetailComponent } from './component/tournament-detail/tournament-detail.component';
import { PlayerRegistrationComponent } from './component/player-registration/player-registration.component';
import { PlayerUnregistrationComponent } from './component/player-unregistration/player-unregistration.component';
import {CreateTournamentComponent} from "./component/create-tournament/create-tournament.component";
import{CloseTournamentComponent} from "./component/close-tournament/close-tournament.component";

export const routes: Routes = [
  { path: 'tournaments', component: TournamentListComponent },
  { path: 'tournament/:id', component: TournamentDetailComponent },
  { path: 'player-registration/:id', component: PlayerRegistrationComponent },
  { path: 'player-unregistration/:id', component: PlayerUnregistrationComponent },
  { path: 'create-tournaments', component: CreateTournamentComponent},
  {path: 'close-tournament/:id', component:CloseTournamentComponent}
];

