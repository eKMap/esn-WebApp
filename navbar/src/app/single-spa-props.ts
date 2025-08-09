import { AppProps } from 'single-spa-angular';
import { InjectionToken } from '@angular/core';

export const SINGLE_SPA_PROPS = new InjectionToken<SingleSpaProps>(
  'single-spa props'
);

export type SingleSpaProps = AppProps<SingleSpaExtraProps> &
  SingleSpaExtraProps;

export interface SingleSpaExtraProps {
  favoriteDog: string;
}
