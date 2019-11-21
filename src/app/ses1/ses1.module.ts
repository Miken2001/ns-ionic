import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ses1Page } from './ses1.page';

const routes: Routes = [
  {
    path: '',
    component: Ses1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],

  declarations: [Ses1Page]
})
export class Ses1PageModule {}
