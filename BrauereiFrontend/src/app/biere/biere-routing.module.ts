import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BierePage } from './biere.page';

const routes: Routes = [
  {
    path: '',
    component: BierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BierePageRoutingModule {}
