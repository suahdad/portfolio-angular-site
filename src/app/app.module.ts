import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { HomepageModule } from 'src/homepage/homepage.module';
import { RoutingModule } from './routing.module';

/**
 * Should only contain barebones
 * highest level import
 * only app level
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    HomepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
