import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule} from '@angular/material';
import {YoutubeService} from './youtube.service';
import {WindowService} from './window.service';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

@NgModule( {
  declarations: [
    AppComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
  ],
  providers: [ YoutubeService, WindowService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
