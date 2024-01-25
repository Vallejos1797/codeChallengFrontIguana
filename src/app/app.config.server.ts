import {mergeApplicationConfig, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";

const serverConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule,ToastrModule),
    provideServerRendering(),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
