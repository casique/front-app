import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Search from '../../assets/db.json';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {
  id?: number;
  fname:string = "";
  lname:string = "";
  tipoDocumento:string = "";
  numeroDocumento:number = 0;
  pais:string = "";
  jsonData: any = Search.search;

  constructor(
    private _route:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.fname = this.jsonData[id].firstName;
    this.lname = this.jsonData[id].lastName;
    this.tipoDocumento = this.documentValue(this.jsonData[id].documentType);
    this.numeroDocumento = this.jsonData[id].documentNumber;
    this.pais = this.jsonData[id].country;
  }

  public resumenData(){
    this._route.navigate(['/busqueda/']);
  }

  public documentValue(type: string): string {
    if(type == "cedula"){
      return "Cedula de Ciudadania";
    } else if (type == "pasaporte"){
      return "Pasaporte";
    } else {
      return "";
    }
  }
}
