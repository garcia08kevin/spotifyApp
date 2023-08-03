import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent {
  @Input()
  public url?: string;

  @Input()
  public alt!: string;

  public hasLoaded:boolean = false;

  ngOnInit(): void{
    if(!this.url) ''
  }

  onLoad(){
    setTimeout(() =>{
      this.hasLoaded = true;
    },1000);

  }
}
