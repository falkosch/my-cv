import { Injectable } from '@angular/core';

@Injectable()
export class AnchorScrollService {
  contentContainer: Element;

  scrollToId(elementId: string): void {
    const contentRect = this.contentContainer.getBoundingClientRect();
    const contentTop = contentRect.top + window.scrollY + 16;

    const element = document.querySelector(elementId);
    const rect = element.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;

    window.scrollTo({
      left: 0,
      top: absoluteTop - contentTop,
      behavior: 'smooth',
    });
  }
}
