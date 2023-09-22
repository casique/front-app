import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {
  busqueda:FormGroup|any;
  documentos:FormControl|any = [
      {key: 'Cedula de Ciudadania', value: 'cedula'},
      {key: 'Pasaporte', value: 'pasaporte'},
    ];
  //public customMaskChar: Object = { 99.900.000.000 };
  constructor(
    // private _http:HttpClient,
    private _route:Router
  ) { }

  ngOnInit(): void {
    this.busqueda = new FormGroup({
      'documentType': new FormControl(this.documentos[2]),
      'documentNumber': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
      'country': new FormControl()
    })
  }
  busquedaData(busqueda:FormGroup){
   // console.log(this.busqueda.value);
    
   

  }
}
