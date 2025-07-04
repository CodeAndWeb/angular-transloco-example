import {Component, inject} from "@angular/core";
import {TranslocoDirective, TranslocoPipe, TranslocoService} from "@jsverse/transloco";

@Component({
  selector: 'app-root',
  imports: [TranslocoDirective, TranslocoPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  translocoService = inject(TranslocoService);

  constructor() {

    this.translocoService.selectTranslate('in-code.text', {count:5})
        .subscribe((text) => {
          console.log(text);
        });
  }

  switchLanguage(lang:string) {
    this.translocoService.setActiveLang(lang);
  }
}

