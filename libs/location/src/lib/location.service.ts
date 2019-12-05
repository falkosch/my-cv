import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {
  constructor() {}

  public getParam(name): string | undefined {
    const locationSearch = new URLSearchParams(window.location.search);
    if (locationSearch.has(name)) {
      return locationSearch.get(name);
    }
    return undefined;
  }

  public updateHistory(url): void {
    history.pushState(undefined, `${document.title} (${url})`, url);
  }

  navigateElement(elementId): void {
    this.updateHistory(this.makeUrlFromHash(elementId));
  }

  private makeUrlFromHash(elementId) {
    if (window.location.search === '') {
      return elementId;
    }
    return `${window.location.search}${elementId}`;
  }

  navigateParam(name, value): void {
    const locationSearch = new URLSearchParams(window.location.search);
    locationSearch.set(name, value);

    // window.location.search = locationSearch.toString();

    history.pushState(
      undefined,
      '',
      `?${locationSearch}${this.hashWithoutSearch()}`,
    );
  }

  private hashWithoutSearch(): string {
    const hash = window.location.hash;
    const searchSeparatorIndex = hash.indexOf('?');
    if (searchSeparatorIndex >= 0) {
      return hash.substr(0, searchSeparatorIndex);
    }
    return hash;
  }
}
