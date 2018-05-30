import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { GtacheComponent } from './gtache/gtache.component';

const appRoutes: Routes = [
  {path: 'gtache', component: GtacheComponent},
  {path:'',
   redirectTo: '/gtache',
   pathMatch: 'full'}

];


@NgModule({
  declarations: [
    AppComponent,
    GtacheComponent
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(appRoutes), HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
