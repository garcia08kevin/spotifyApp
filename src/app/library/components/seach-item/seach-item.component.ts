import { Component, Input } from '@angular/core';
import { Item } from '../../interface/searchResult';

@Component({
  selector: 'library-seach-item',
  templateUrl: './seach-item.component.html',
  styles: [
  ]
})
export class SeachItemComponent {

  @Input()
  public type!: string;

  @Input()
  public album!: Item ;
}
