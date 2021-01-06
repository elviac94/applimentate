import { TestBed } from '@angular/core/testing';
import { EerService } from './eer.service';

describe( 'EerService', () => {
  beforeEach( () => TestBed.configureTestingModule( {
    imports: []
  } ) );

  it( 'should be created', () => {
    const service: EerService = TestBed.get( EerService );
    expect( service ).toBeTruthy();
  } );
});
