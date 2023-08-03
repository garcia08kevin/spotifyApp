import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search-bar',
  template: `
    <h5>{{title}}</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar"
      (keyup.enter)="emitValue(searchInput.value); searchInput.value=''"
      #searchInput
    >
  `,
})

export class SearchBarComponent {
  @Input()
  public title!:string;

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  emitValue(value:string) {
    this.onValue.emit(value);
  }

  @ViewChild('searchInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  constructor() { }

}
