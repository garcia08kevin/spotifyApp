import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages//search-page/search-page.component';
import { LibraryRoutingModule } from './library-routing.module';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SharedModule } from '../shared/shared.module';
import { SeachItemComponent } from './components/seach-item/seach-item.component';
import { SeachArtistComponent } from './pages/seach-artist/seach-artist.component';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';
import { ArtistAlbumComponent } from './components/artist-album/artist-album.component';
import { ArtistSongComponent } from './components/artist-song/artist-song.component';
import { RelatedArtistsComponent } from './components/related-artists/related-artists.component';



@NgModule({
  declarations: [
    SearchPageComponent,
    SearchResultComponent,
    SearchBarComponent,
    SeachItemComponent,
    SeachArtistComponent,
    ArtistDetailComponent,
    AlbumDetailComponent,
    ArtistAlbumComponent,
    ArtistSongComponent,
    RelatedArtistsComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule
  ],
})
export class LibraryModule { }
