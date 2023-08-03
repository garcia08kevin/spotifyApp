import { Component, Input } from '@angular/core';
import { Artist } from '../../interface/artist';

@Component({
  selector: 'library-related-artists',
  templateUrl: './related-artists.component.html',
  styles: [
  ]
})
export class RelatedArtistsComponent {
  public show : boolean = false;

  @Input()
  public artists!: Artist[];

  showMetod():void{
    this.show = !this.show;
  }

}
