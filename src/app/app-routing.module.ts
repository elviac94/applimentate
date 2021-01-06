import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'allergens', loadChildren: './allergens/allergens.module#AllergensModule' },
  { path: 'bmi', loadChildren: './bmi/bmi.module#BmiPageModule' },
  { path: 'eer', loadChildren: './eer/eer.module#EerPageModule' }

];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
