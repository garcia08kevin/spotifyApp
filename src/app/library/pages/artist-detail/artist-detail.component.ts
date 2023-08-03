import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../../library.service';
import { switchMap } from 'rxjs';
import { Artist } from '../../interface/artist';
import { Album } from '../../interface/album';
import { ArtistAlbum } from '../../interface/ArtistAlbum';
import { TopTracks } from '../../interface/topTracks';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styles: [
  ]
})
export class ArtistDetailComponent {
  public artist!: Artist;
  public relatedArtists!: Artist[];
  public albums!: ArtistAlbum | null;
  public topTracks!: TopTracks | null;

  constructor(private activatedRoute: ActivatedRoute,
    private routes: Router,
    private libraryService: LibraryService,
  ) {
    activatedRoute.params.pipe(
      switchMap(({ id }) => this.libraryService.getArtistDetail(id, 'albums'))
    ).subscribe(resp => {
      this.albums = resp;
    })

    activatedRoute.params.pipe(
      switchMap(({ id }) => this.libraryService.getArtistDetail(id, 'top-tracks?market=ES'))
    ).subscribe(resp => {
      this.topTracks = resp;
    })

    activatedRoute.params.pipe(
      switchMap(({ id }) => this.libraryService.getArtistDetail(id, 'related-artists'))
    ).subscribe(resp => {
      console.log(resp.artists);
      this.relatedArtists = resp.artists;
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.libraryService.getDetail(id, 'artists'))
      )
      .subscribe((artist) => {
        if (!artist) return this.routes.navigateByUrl('');
        return this.artist = artist;
      });
  }
}
