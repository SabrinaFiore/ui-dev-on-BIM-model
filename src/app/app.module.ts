import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { TogleComponent } from './components/togle/togle.component';
import { CanvasComponent } from './components/canvas/canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeaderComponent,
    TimelineComponent,
    TogleComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
