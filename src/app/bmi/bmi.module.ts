import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { BmiPage } from './bmi.page';
import * as BMI_REDUCERS from './bmi.reducers';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BmiPage
  }
];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SharedModule,
    RouterModule.forChild( routes ),
    StoreModule.forFeature('BMI', BMI_REDUCERS.genre)
  ],
  declarations: [ BmiPage ]
} )
export class BmiPageModule { }
