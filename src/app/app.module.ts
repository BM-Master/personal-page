import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { CentralInfoComponent } from './central-info/central-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './central-info/card/card.component';
import { CardBottomComponent } from './central-info/card-bottom/card-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    CentralInfoComponent,
    NavBarComponent,
    CardComponent,
    CardBottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
