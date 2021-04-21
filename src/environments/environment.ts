// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import {
//   ConsoleLogConfig,
//   LoggerType,
//   LogMode
// } from '@phoenix/ui/common';

export const environment = {
  production: false,
  translateionBundleUrl: 'assets/i8n',
  mockApiServer: 'http://localhost:7878',
  // logConfig: [{
  //   loggerType: LoggerType.CONSOLE,
  //   logLevel: LogMode.WARN
  // } as ConsoleLogConfig
  // ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
