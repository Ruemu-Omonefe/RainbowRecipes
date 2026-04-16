import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { ServiceWorkerListenerService } from './shared/services/service-worker-listener.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      })
    ), provideClientHydration(), provideHttpClient(), provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    }), ServiceWorkerListenerService]
};
