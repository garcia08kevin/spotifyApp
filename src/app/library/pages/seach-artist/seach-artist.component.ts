import { Component } from '@angular/core';
import { LibraryService } from '../../library.service';

@Component({
  selector: 'app-seach-artist',
  templateUrl: './seach-artist.component.html',
  styles: [
  ]
})
export class SeachArtistComponent {
  constructor(private libraryService:LibraryService){}

  search(term:string){
    this.libraryService.searchSpotify(term, 'artist');
  }
}
