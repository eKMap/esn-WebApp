import 'zone.js'; // 👈 thêm vào đầu file

import { SINGLE_SPA_PROPS, SingleSpaExtraProps } from './app/single-spa-props';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { singleSpaAngular } from 'single-spa-angular';

export const { bootstrap, mount, unmount } =
  singleSpaAngular<SingleSpaExtraProps>({
    bootstrapApplication,
    rootComponent: AppComponent,
    appConfig,
    propsInjectionToken: SINGLE_SPA_PROPS,
  });
