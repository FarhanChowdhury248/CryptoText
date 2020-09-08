import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EnigmaComponent } from './enigma/enigma.component';
import { CaesarComponent } from './caesar/caesar.component';
import { MorseComponent } from './morse/morse.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'enigma', component: EnigmaComponent},
  {path: 'caesar', component: CaesarComponent},
  {path: 'morse', component: MorseComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
