import { Routes } from '@angular/router';
import { 
  PokemonComponent,
  HomeComponent,
  HelpComponent
} from './index';

export const appRoutes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'pokemon', component: PokemonComponent },
      { path: 'help', component: HelpComponent }
    ];