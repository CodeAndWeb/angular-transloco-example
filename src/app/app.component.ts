import { Component } from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translocoService: TranslocoService) {

    this.translocoService.selectTranslate('in-code.text', {count: 5})
      .subscribe((text) => {
        console.log(text);
      });

  }

  switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

}
