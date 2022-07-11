import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SipComponent } from './sip/sip.component';
import { SplComponent } from './spl/spl.component';
import { LcComponent } from './lc/lc.component';
import { CagrComponent } from './cagr/cagr.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    SipComponent,
    SplComponent,
    LcComponent,
    CagrComponent
  ]
})
export class HomePageModule {}
