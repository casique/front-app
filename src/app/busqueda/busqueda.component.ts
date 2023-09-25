import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as countries from '../models/country';
import Search from '../../assets/db.json';
import { ListaService } from '../services/lista.services';

declare var $:any;

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  busqueda:FormGroup|any;
  documentos:FormControl|any = [
      {key: 'Cedula de Ciudadania', value: 'cedula'},
      {key: 'Pasaporte', value: 'pasaporte'},
    ];
  paises:FormControl|any = [
    { name: String }
  ];
  tipoDocumento:Boolean = false;
  numeroDocumento:Boolean = false;
  nombrePais:Boolean = false;
  jsonData: any = Search.search;

  constructor(
    private _route:Router,
    public listaService:ListaService
  ) { }

  ngOnInit(): void {
    this.paises = countries.Countries.sort();
    this.busqueda = new FormGroup({
      'documentType': new FormControl(this.documentos[2], Validators.required),
      'documentNumber': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
      'country': new FormControl(this.paises[5], Validators.required)
    })
    this.busqueda.reset();
    
    this.busqueda.get('documentType').valueChanges.subscribe((x: any) => {
      if(x){
        this.tipoDocumento = true;
      } else {
        this.tipoDocumento = false;
      }
    })

    this.busqueda.get('documentNumber').valueChanges.subscribe((x: number) => {
      if(x > 10000000){
        this.numeroDocumento = true;
      } else {
        this.numeroDocumento = false;
      }
    })

    this.busqueda.get('country').valueChanges.subscribe((x: string) => {
      if(x){
        this.nombrePais = true;
      } else {
        this.nombrePais = false;
      }
    })

    const data$ = this.listaService.data;
    console.log(data$);
  }

  busquedaData(busqueda:FormGroup){
    console.log(this.busqueda.value.country, this.documentValue(busqueda.value.documentType), busqueda.value.documentNumber);
    var index = this.jsonData.findIndex((obj: { documentNumber: number; }) => obj.documentNumber === busqueda.value.documentNumber);
    console.log(index);
    var user:boolean = false;
    if(index >= 0){
      user = this.jsonData[index].documentType == this.documentValue(busqueda.value.documentType) 
          && this.jsonData[index].country == busqueda.value.country;
      if(user){
        this.busqueda.reset();
        this._route.navigate(['resumen/'+index]);
      } else {
        alert('El documento no es del tipo o del país seleccionado.');
      }
    } else {
      alert('Documento no encontrado');
    }
  }

  public documentValue(type: string): string {
    if(type == "Cedula de Ciudadania"){
      return "cedula";
    } else if (type == "Pasaporte"){
      return "pasaporte";
    } else {
      return "";
    }
  }
}
