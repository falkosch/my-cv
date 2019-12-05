import { CV } from './meta-model/cv.meta-model';

import { cvFactory } from './model/cv.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CvService {
  constructor() {}

  model(): CV {
    return cvFactory();
  }
}
