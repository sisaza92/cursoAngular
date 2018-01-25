import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { ColorDirectiveDirective } from './directives/color-directive.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EjemploService } from './services/ejemplo.service';


@NgModule({
  declarations: [
    AppComponent,
    ColorDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // necesario para el uso de formularios
    HttpClientModule // necesario para el uso de servicios

  ],
  providers: [EjemploService],
  bootstrap: [AppComponent]
})
export class AppModule { }
