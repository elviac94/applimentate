import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BmiService } from './';
import { BmiRange } from '../enums/bmi.bmi-range.enum';

describe( 'BmiService', () => {

  let service: BmiService;

  beforeEach( () => TestBed.configureTestingModule( {
    imports: [TranslateModule.forRoot()]
  }));

  beforeEach(() => {
    service = TestBed.get( BmiService )
  });

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );

  describe('calcBMI()', () => {
    it( 'Should return a fourteen elements list', () => {
      const bmiResult = service.calcBMI( 172, 72);
      expect( bmiResult ).toBeLessThan( BmiRange.MORBID );
    });
  });

  describe('silhouetteStylesDependingOnBmiResult()', () => {
    it('Should return "slim" when BmiResult is SLIM', () => {
      const className = service.silhouetteStylesDependingOnBmiResult(BmiRange.SLIM);
      expect(className).toBe('slim');
    });

    it('Should return "fit" when BmiResult is FIT', () => {
      const className = service.silhouetteStylesDependingOnBmiResult(BmiRange.FIT);
      expect(className).toBe('fit');
    });

    it('Should return "overweight" when BmiResult is OVERWEIGHT', () => {
      const className = service.silhouetteStylesDependingOnBmiResult(BmiRange.OVERWEIGHT);
      expect(className).toBe('overweight');
    });

    it('Should return "obese" when BmiResult is OBESE', () => {
      const className = service.silhouetteStylesDependingOnBmiResult(BmiRange.OBESE);
      expect(className).toBe('obese');
    });

    it('Should return "morbid" when BmiResult is MORBID', () => {
      const className = service.silhouetteStylesDependingOnBmiResult(BmiRange.MORBID);
      expect(className).toBe('morbid');
    });
  });
});
