import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/_common/shared.module';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
