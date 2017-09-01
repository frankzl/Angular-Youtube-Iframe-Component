import {Component, Input, OnInit} from '@angular/core';
import {WindowService} from '../window.service';

@Component( {
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: [ './youtube-player.component.css' ]
} )

export class YoutubePlayerComponent implements OnInit {

  @Input() videoID;
  @Input() playerID: number = 0;
  player: any;
  @Input() height = 100;
  @Input() width = 100;

  @Input() onPlayerReady: (event: any) => any;
  @Input() onPlayerStateChange: (event: any) => any;

  constructor( private windowService: WindowService ) {
  }

  ngOnInit() {
    if ( this.playerID === 0 ) this.playerID = this.windowService.getUniqueID();
    if ( this.windowService.apiLoaded ) {
      console.log( 'here' );
      this.windowService.createPlayer( this.playerID, this.height, this.width, this.videoID, this.onPlayerReady, this.onPlayerStateChange )
        .subscribe(
          ( player ) => {
            console.log(player);
            this.player = player;
          }
        );
    } else {
      console.log( 'hoe' );
      this.windowService.apiLoadedEvent.subscribe(
        () => {
          this.windowService.createPlayer( this.playerID, this.height, this.width, this.videoID,
            this.onPlayerReady, this.onPlayerStateChange);
          this.windowService.apiLoadedEvent.unsubscribe();
        }
      );
    }
  }
}
