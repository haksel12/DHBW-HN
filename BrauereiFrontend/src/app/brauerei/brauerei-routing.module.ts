import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrauereiPage } from './brauerei.page';

const routes: Routes = [
  {
    path: '',
    component: BrauereiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrauereiPageRoutingModule {}
