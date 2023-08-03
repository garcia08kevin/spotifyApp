import { Component, Input } from '@angular/core';
import { Item } from '../../interface/ArtistAlbum';

@Component({
  selector: 'library-artist-album',
  templateUrl: './artist-album.component.html',
  styles: [
  ]
})
export class ArtistAlbumComponent {
  public show : boolean = false;

  @Input()
  public albums! : Item[];

  constructor(){
  }

  showMetod():void{
    this.show = !this.show;
  }
}
