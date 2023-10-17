import { Component } from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-transloco-example';
  translatedInSource: string = "";

  constructor(private translocoService: TranslocoService) {
    translocoService.getDefaultLang();

    this.translocoService.selectTranslate('icu.pluralization', {count:5})
      .subscribe((text) => {
        this.translatedInSource = text;
      });
  }

  switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
