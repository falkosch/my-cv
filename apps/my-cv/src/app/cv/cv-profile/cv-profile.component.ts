import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CVProfile } from '@my-cv/cv-model';
import { Subscription, interval } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'my-cv-cv-profile',
  templateUrl: './cv-profile.component.html',
  styleUrls: ['./cv-profile.component.scss'],
})
export class CvProfileComponent implements OnInit, OnDestroy {
  @Input() profile: CVProfile;

  intervalSubscription: Subscription;

  constructor(private translateService: TranslateService) {}

  get profileMailHref() {
    const mail = this.translateService.instant(this.profile.mail);
    const subject = this.translateService.instant('cv.profile.mail.subject');
    const body = this.translateService.instant('cv.profile.mail.body', {
      first: this.translateService.instant(this.profile.name.first),
      last: this.translateService.instant(this.profile.name.last),
    });
    return `mailto:${mail}?subject=${subject}&body=${body}`;
  }

  ngOnInit() {
    this.intervalSubscription = interval(15000).subscribe(() =>
      this.nextProfilePicture(),
    );
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      this.intervalSubscription = undefined;
    }
  }

  nextProfilePicture() {
    this.profile.pictureIndex =
      (this.profile.pictureIndex + 1) % this.profile.pictures.length;
  }

  getFlexGtSmForLink(i: number) {
    const odd = i % 2 === 1;
    if (odd) {
      return 'calc(200%/3 -16px)';
    }
    return 'calc(100%/3 -16px)';
  }
}
