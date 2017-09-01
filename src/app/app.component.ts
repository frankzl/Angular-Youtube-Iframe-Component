import {Component, Input, OnInit} from '@angular/core';
import {WindowService} from './window.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent implements OnInit {
  title = 'app';
  id = 'gTAl6CTitNE';
  private ytEvent;
  private player;

  constructor( private windowService: WindowService ) {
  }

  ngOnInit() {
    //this.loadAPI();
  }
}
