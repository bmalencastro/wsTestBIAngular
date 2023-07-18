import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { PeticionI } from '../../modelos/peticion.interface';
import { Observable } from 'rxjs';
import { RespuestaI } from 'src/app/modelos/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class WsTestBiService {
  url:string = "wsTestBIRestful";
  constructor(private http:HttpClient) { }

  obtenerUsuarios(peticion : PeticionI) : Observable<RespuestaI> {
    //let direccion = this.url + "/restBI/transaction/obtenerRegistroUsuario";
    let direccion = this.url + "/restBI/transaction/obtenerRegistroUsuario";
    console.log(direccion);
    return this.http.post<RespuestaI>(direccion, peticion);    
  }
}
