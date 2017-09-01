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

  loadAPI() {

    let player;
    this.windowService.nativeWindow.onYouTubeIframeAPIReady = () => {
      console.log('ready');
      player = new this.windowService.nativeWindow.YT.Player( 'player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': (window as any).onPlayerReady,
          'onStateChange': (window as any).onPlayerStateChange
        }
      } );
    };

    // 4. The API will call this function when the video player is ready.
    this.windowService.nativeWindow.onPlayerReady = function ( event ) {
      event.target.playVideo();
    };

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;

    this.windowService.nativeWindow.onPlayerStateChange = function ( event ) {
      if ( event.data === (window as any).YT.PlayerState.PLAYING && !done ) {
        setTimeout( stopVideo, 6000 );
        done = true;
      }
    };

    function stopVideo() {
      player.stopVideo();
    }
  }

  onStateChange( event ) {
    this.ytEvent = event.data;
  }

  savePlayer( player ) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  parseUrl( url: string ) {
    //https://www.youtube.com/watch?v=gTAl6CTitNE
    const tmp = url.split( '/' );
    if ( tmp.length <= 0 ) return;
    const tmp2 = tmp[ tmp.length - 1 ];
    this.id = tmp2.split( '=' )[ 1 ];
    console.log( tmp2.split( '=' )[ 1 ] );
    this.player.playVideo();
  }
}
