import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SeachArtistComponent } from './pages/seach-artist/seach-artist.component';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';

const routes:Routes = [
  {
    path: 'searchAlbum',
    component: SearchPageComponent
  },
  {
    path: 'searchArtist',
    component: SeachArtistComponent
  },
  {
    path: 'artist/:id',
    component: ArtistDetailComponent
  },
  {
    path: 'album/:id',
    component: AlbumDetailComponent
  },
  {
    path: '**',
    redirectTo: 'searchAlbum'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class LibraryRoutingModule { }
