import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Item, SearchResult } from './interface/searchResult';
import { Artist } from './interface/artist';
import { Observable, map } from 'rxjs';
import { Album } from './interface/album';
import { ArtistAlbum } from './interface/ArtistAlbum';
import { SharedService } from '../shared/shared.service';
import { TopTracks } from './interface/topTracks';

@Injectable({ providedIn: 'root' })
export class LibraryService {
  constructor(private httpClient: HttpClient, private sharedService:SharedService) { }
  public url: string = 'https://api.spotify.com/v1';
  public artistsList: Item[] = [];
  public albumList: Item[] = [];



  private getData({ albums, artists }: SearchResult) {
    if (albums == undefined) {
      const { items } = artists!;
      this.artistsList = items;
    } else {
      const { items } = albums;
      this.albumList = items;
    }
  }

  getDetail(id: string, type: string): Observable<any | null> {
    const token = this.sharedService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.httpClient.get<Artist | Album>(`${this.url}/${type}/${id}`, { headers })
      .pipe(
        map(artist => artist != undefined ? artist : null)
      );
  }

  getArtistDetail(id: string, urlSeach: string): Observable<any | null> {
    const token = this.sharedService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.httpClient.get<ArtistAlbum | TopTracks | Artist[]>(`${this.url}/artists/${id}/${urlSeach}`, { headers })
      .pipe(
        map(artist => artist != undefined ? artist : null)
      );
  }


  searchSpotify(search: string, type: string): void {
    if (search.length === 0) return;
    const token = this.sharedService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const params = new HttpParams()
      .set('type', type)
      .set('include_external', 'audio')
      .set('q', search)
    this.httpClient.get<SearchResult>(`${this.url}/search`, { params, headers })
      .subscribe(resp => {
        this.getData(resp);
        console.log(resp);
      });
  }
}
