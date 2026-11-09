import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

/** Aplica el título y la descripción definidos en cada ruta. */
@Injectable()
export class SeoTitleStrategy extends TitleStrategy {
  constructor(private readonly titleService: Title, private readonly meta: Meta) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.titleService.setTitle(title);
      this.meta.updateTag({ property: 'og:title', content: title });
    }

    let route = snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const description = route.data['description'];
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
    }
  }
}
