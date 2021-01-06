import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { EerPage } from './eer.page';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: EerPage
  }
];

@NgModule( {
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    SharedModule,
    RouterModule.forChild( routes ),
  ],
  declarations: [ EerPage ]
} )
export class EerPageModule { }
