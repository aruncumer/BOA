import { InjectionToken } from '@angular/core';

export interface EnvironmentConfig {
     production: boolean,
     translateionBundleUrl: string,
     mockApiServer: string,
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>('EnvironmentConfig');
