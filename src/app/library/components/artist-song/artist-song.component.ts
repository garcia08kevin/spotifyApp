import { Component, Input } from '@angular/core';
import { Track } from '../../interface/topTracks';

@Component({
  selector: 'library-artist-song',
  templateUrl: './artist-song.component.html',
  styles: [
  ]
})
export class ArtistSongComponent {
  public show : boolean = false;

  @Input()
  public tracks! : Track[];

  showMetod():void{
    this.show = !this.show;
  }
}
