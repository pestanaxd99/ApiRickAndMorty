import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LocationDetailsComponent } from './location-details/location-details.component';


@NgModule({
  declarations: [
    LocationDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LocationDetailsComponent
  ]
})
export class LocationsModule { }
