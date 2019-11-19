import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinimalExampleComponent } from './minimal-example/minimal-example.component';
import { AdvancedExampleComponent } from './advanced-example/advanced-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MinimalExampleComponent,
    AdvancedExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
