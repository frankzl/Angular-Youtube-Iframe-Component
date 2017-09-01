import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

function _window(): any {
  return window;
}

function createYTPlayer( id, height, width, videoID, onPlayerReady, onPlayerStateChange ) {
  return new (window as any).YT.Player( id.toString(), {
    height: height,
    width: width,
    videoId: videoID,
    onPlayerReady: onPlayerReady,
    onStateChange: onPlayerStateChange
  } );
}

@Injectable()
export class WindowService {

  id: number = 0;
  apiLoaded = false;
  apiLoadedEvent = new Subject();

  constructor() {
    this.nativeWindow.onYoutubeIframeAPIReady = this.onYoutubeIframeAPIReady();
  }

  get nativeWindow(): any {
    return _window();
  }

  getUniqueID(): number {
    return ++this.id;
  }

  onYoutubeIframeAPIReady() {
    console.log('YT Iframe API loaded and ready for use');
    this.apiLoaded = true;
    this.apiLoadedEvent.next();
  }

  createPlayer( id, height, width, videoID, onPlayerReady, onPlayerStateChange ): Observable<any> {
    return new Observable(
      observer => {
        setTimeout(
          () => {
            observer.next( createYTPlayer( id, height, width, videoID, onPlayerReady, onPlayerStateChange) );
          }, 1000
        );
      } );
  }
}
