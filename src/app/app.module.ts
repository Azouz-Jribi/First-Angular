import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/Router';


import { AppComponent } from './app.component';
import { AzouzComponent } from './azouz/azouz.component';
import { AddPoints, Active } from './azouz/azouz-pipe';
import { HttpModule } from '@angular/http';
import { TarakComponent } from './tarak/tarak.component';
import { AminComponent } from './amin/amin.component';

const AppRoutes: Routes = [
  { path: 'amin', component: AminComponent },
  { path: 'tarak', component: TarakComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    AzouzComponent,
    AddPoints,
    Active,
    TarakComponent,
    AminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
