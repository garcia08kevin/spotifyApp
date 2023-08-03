import { Component } from '@angular/core';
import { LibraryService } from '../../library.service';

@Component({
  selector: 'library-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {
  constructor(private libraryService:LibraryService){}

  search(term:string){
    this.libraryService.searchSpotify(term, 'album');
  }
}
