import {Injectable} from '@angular/core';
import {BmiRange} from '../enums/bmi.bmi-range.enum';

@Injectable( {
  providedIn: 'root'
} )
export class BmiService {

  public calcBMI(height: number, weight: number): number {
    const result: number = weight / ( ( height / 100 ) * ( height / 100 ) );
    return !isNaN( result ) && result !== Infinity ? result : 0;
  }

  public silhouetteStylesDependingOnBmiResult(bmiResult: number): string {
    
    if ( bmiResult <= BmiRange.SLIM ) {
      return 'slim';
    } else if ( bmiResult <= BmiRange.FIT ) {
      return 'fit';
    } else if ( bmiResult <= BmiRange.OVERWEIGHT ) {
      return 'overweight';
    } else if ( bmiResult <= BmiRange.OBESE ) {
      return 'obese';
    } else {
      return 'morbid';
    }
  }
}
