import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrauereiPageRoutingModule } from './brauerei-routing.module';

import { BrauereiPage } from './brauerei.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrauereiPageRoutingModule
  ],
  declarations: [BrauereiPage]
})
export class BrauereiPageModule {}
