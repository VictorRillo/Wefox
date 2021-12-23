import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {responseHttpInterceptorProvider} from "./core/interceptor/response-interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TripsListModule} from "./modules/trips-list/trips-list.module";
import {EditTripDialogModule} from "./modules/edit-trip-dialog/edit-trip-dialog.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TranslateErrorPipe } from './shared/pipes/translate-error.pipe';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    TranslateErrorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    TripsListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [responseHttpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
