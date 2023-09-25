import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ResumenComponent } from './resumen/resumen.component';
import { HttpClientModule } from '@angular/common/http';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapFormComponent,
    BootstrapTableComponent,
    BusquedaComponent,
    JumbotronComponent,
    ResumenComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CurrencyMaskModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
