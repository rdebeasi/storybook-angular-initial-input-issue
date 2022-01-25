import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import GreeterComponent from 'src/stories/greeter.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
