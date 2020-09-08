import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpService } from './http.service';
import { EnigmaComponent } from './enigma/enigma.component';
import { CaesarComponent } from './caesar/caesar.component';
import { MorseComponent } from './morse/morse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnigmaComponent,
    CaesarComponent,
    MorseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
