import { Component } from '@angular/core';
import { Album } from '../../interface/album';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../../library.service';
import { switchMap } from 'rxjs';
import { Artist } from '../../interface/artist';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styles: [
  ]
})
export class AlbumDetailComponent {
  public album?: Album;

  constructor(private activatedRoute: ActivatedRoute,
    private routes: Router,
    private libraryService: LibraryService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.libraryService.getDetail(id, 'albums'))
      )
      .subscribe((album) => {
        if (!album) return this.routes.navigateByUrl('');
        console.log(album);
        return this.album = album;
      });
  }
}
