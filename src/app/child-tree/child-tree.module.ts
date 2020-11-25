import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildTreePageRoutingModule } from './child-tree-routing.module';

import { ChildTreePage } from './child-tree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildTreePageRoutingModule
  ],
  declarations: [ChildTreePage]
})
export class ChildTreePageModule {}
