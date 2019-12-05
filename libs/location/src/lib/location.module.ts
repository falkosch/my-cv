import { LocationService } from './location.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    {
      provide: LocationService,
      useClass: LocationService,
    },
  ],
})
export class LocationModule {}
