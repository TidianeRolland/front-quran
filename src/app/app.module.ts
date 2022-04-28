import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecitatorPageComponent } from './recitator-page/recitator-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayingPageComponent } from './playing-page/playing-page.component';
import { RecitatorItemComponent } from './recitator-item/recitator-item.component';
import { FormatSecondsPipe } from './format-seconds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecitatorPageComponent,
    PageNotFoundComponent,
    PlayingPageComponent,
    RecitatorItemComponent,
    FormatSecondsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
