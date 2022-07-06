import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BierePageRoutingModule } from './biere-routing.module';

import { BierePage } from './biere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BierePageRoutingModule
  ],
  declarations: [BierePage]
})
export class BierePageModule {}
