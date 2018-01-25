import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColorDirectiveDirective } from './color-directive.directive';
import { NamePipe } from './name.pipe';
import { NuevoPipePipe } from './nuevo-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiciocarpetaService } from './services/serviciocarpeta.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ColorDirectiveDirective,
    NamePipe,
    NuevoPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // necesario para el uso de formularios
    HttpClientModule // necesario para el uso de servicios

  ],
  providers: [ServiciocarpetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
