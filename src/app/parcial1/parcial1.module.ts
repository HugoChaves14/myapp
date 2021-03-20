import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Parcial1PageRoutingModule } from './parcial1-routing.module';

import { Parcial1Page } from './parcial1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Parcial1PageRoutingModule
  ],
  declarations: [Parcial1Page]
})
export class Parcial1PageModule {}
