import { NgModule } from '@angular/core';
import { AnchorScrollService } from './anchor-scroll.service';

@NgModule({
  providers: [
    {
      provide: AnchorScrollService,
      useClass: AnchorScrollService,
    },
  ],
})
export class AnchorScrollModule {}
