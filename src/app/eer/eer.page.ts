import { Component, OnInit, ViewChild } from '@angular/core';
import { GenreEnum } from '../shared/enums/genre.enum';
import { Genre } from '../shared/types/genre.type';
import { EerService } from './services';

@Component( {
  selector: 'app-eer',
  templateUrl: './eer.page.html',
  styleUrls: [ './eer.page.scss' ]
} )
export class EerPage implements OnInit {

  @ViewChild('genreRadioButton') private genreRadioButton: any;
  public genre: Genre;
  public age: any;
  public height: any;
  public weight: any;
  public result: number;
  public readonly GenreEnum = GenreEnum;

  constructor (
    private eerService: EerService
  ) {  }

  ngOnInit() {
    this.initGenre();
  }

  initGenre(): void {
    this.genre = GenreEnum.WOMAN;
    this.genreRadioButton.ionChange.subscribe( RadButton => {
      this.genre  = RadButton.target.value;
    });
  }

  disableButton(): boolean {
    return !this.height || !this.weight || !this.age;
  }

  onClickCalc(): void {
    this.result = this.eerService.calcEer(this.height, this.weight, this.age, this.genre);
  }
}
