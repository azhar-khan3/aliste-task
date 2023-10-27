import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectricianListComponent } from './electrician-list/electrician-list.component';
import { SiteListComponent } from './site-list/site-list.component';
import { AssignComponent } from './assign/assign.component';


@NgModule({
  declarations: [
    AppComponent,
    ElectricianListComponent,
    SiteListComponent,
    AssignComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
