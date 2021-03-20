import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Parcial1Page } from './parcial1.page';

const routes: Routes = [
  {
    path: '',
    component: Parcial1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Parcial1PageRoutingModule {}
