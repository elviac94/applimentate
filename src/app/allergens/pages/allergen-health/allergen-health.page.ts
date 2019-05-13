import { Component, OnInit } from '@angular/core';
import { AllergenDetailInterface } from '../../interfaces/allergen.interface';
import { ActivatedRoute } from '@angular/router';
import { AllergensService } from '../../services/allergens.service';

@Component( {
  selector: 'app-allergen-health',
  templateUrl: './allergen-health.page.html',
  styleUrls: [ './allergen-health.page.scss' ],
} )
export class AllergenHealthPage implements OnInit {

  allergen: AllergenDetailInterface;

  allergenPath: string;

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    // this.allergenPath = this.allergensService.getAllergenNameFromPath( this.route.snapshot.routeConfig.path );
    // this.allergen = this.allergensService.getAllergenById( this.allergenPath );
    // console.log( this.allergenPath );
    // console.log( this.allergen );

    this.allergen = this.allergensService.getAllergenById( this.route.snapshot.params[ 'id' ] );
    console.log( this.route.snapshot );
  }
}
