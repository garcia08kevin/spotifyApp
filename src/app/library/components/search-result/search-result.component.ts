import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../interface/searchResult';
import { LibraryService } from '../../library.service';

@Component({
  selector: 'library-search-result',
  templateUrl: './search-result.component.html',
  styles: [
  ]
})
export class SearchResultComponent {
  constructor(private libraryService:LibraryService){}

  @Input()
  public type!: string;

  get searchResults(): Item[] {
    if(this.type === 'album')  return this.libraryService.albumList;
    return this.libraryService.artistsList;
  }
}
