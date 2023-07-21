import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';

/**
 * shared module 
 * module that's shared between modules
 */
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PagesModule,
    ServicesModule
  ]
})
export class SharedModule { }
