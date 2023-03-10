import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

import { IonicModule } from '@ionic/angular';

import { ItemlistComponent } from './itemlist.component'

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ItemlistComponent],
  exports: [ItemlistComponent]
})

export class ItemlistComponentModule {}
