import {
  provideTransloco,
  TranslocoModule
} from '@ngneat/transloco';
import { isDevMode, NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';
import {provideTranslocoMessageformat} from "@ngneat/transloco-messageformat";


@NgModule({
  exports: [ TranslocoModule ],
  providers: [
    provideTransloco({
        config: {
          availableLangs: ['en', 'es'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      }),

    // optional: use ICU syntax in the translation strings
    provideTranslocoMessageformat(), // add this AFTER the provideTransloco()
  ],
})
export class TranslocoRootModule {}
