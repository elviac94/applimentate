import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Genre } from './enums/bmi.genre.enum';
import { BmiService } from './services';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as BMI_ACTIONS from './bmi.actions';

@Component( {
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: [ './bmi.page.scss' ]
} )
export class BmiPage implements OnInit {

  @ViewChild('genreRadioButton') private genreRadioButton: any;
  public height: any;
  public weight: any;
  public genre: Genre;

  public bmiResult = 0;
  public readonly GenreEnum = Genre;

  constructor (
    private elRef: ElementRef, private store: Store<AppState>,
    private bmiService: BmiService
  ) {  }

  ngOnInit() {
    this.initGenre();
  }

  initGenre(): void {
    this.store.select('genre').subscribe( state => {
      this.genre = state;
    });
    this.genreRadioButton.ionChange.subscribe( RadButton => {
      const toggledGenre = RadButton.target.value;
      this.store.dispatch(new BMI_ACTIONS.ToggleGenre(toggledGenre));
    });
  }

  onClickCalcBMI(): void {
    this.bmiResult = this.bmiService.calcBMI(this.height, this.weight);
    this.updateChosenSilhouetteClassName();
  }

  disableCalcBMI(): boolean {
    return !this.height || !this.weight;
  }

  getSilhouetteImg(): string {
    return '../../assets/img/bmi/bmi_' + this.genre + '_silhouettes.png';
  }

  private updateChosenSilhouetteClassName(): void {
    const chosenSilhouetteClass = 'choosen-silhouette',
      chosenSilhouetteHtmlElement = this.elRef.nativeElement.querySelector( `div.${chosenSilhouetteClass}` ),
      className = this.bmiService.silhouetteStylesDependingOnBmiResult(this.bmiResult);
    chosenSilhouetteHtmlElement.className = `${chosenSilhouetteClass} ${className}`;
      
  }
}
