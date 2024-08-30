import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app_front/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
