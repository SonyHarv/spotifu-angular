import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], //TODO:Declaraciones, componentes, directivas, pipes
  imports: [BrowserModule, AppRoutingModule], //TODO:Solo se importan otros modules
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
