import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecitatorPageComponent } from './recitator-page/recitator-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayingPageComponent } from './playing-page/playing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecitatorPageComponent,
    PageNotFoundComponent,
    PlayingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
