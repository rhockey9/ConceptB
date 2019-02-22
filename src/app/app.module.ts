import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { HomePlateComponent } from './home-plate/home-plate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePlateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
