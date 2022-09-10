import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LocationDetailsRoutingModule } from './location-details-routing.module';
import { LocationDetailsComponent } from './location-details.component';


@NgModule({
  declarations: [
    LocationDetailsComponent
  ],
  imports: [
    CommonModule,
    LocationDetailsRoutingModule,
    RouterModule
  ]
})
export class LocationDetailsModule { }
