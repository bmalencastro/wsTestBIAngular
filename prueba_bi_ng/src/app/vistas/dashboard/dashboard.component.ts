import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule} from '@angular/forms';
import { WsTestBiService } from '../../servicios/api/ws-test-bi.service';
import { PeticionI } from 'src/app/modelos/peticion.interface';
import { HeaderI } from 'src/app/modelos/header.interface';
import { UsuarioI } from 'src/app/modelos/usuario.interface';
import { MovimientoI } from 'src/app/modelos/movimiento.interface';
import { RespuestaI } from 'src/app/modelos/respuesta.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Datos de servicios
  respuesta : RespuestaI | undefined;
  usuario : UsuarioI | undefined;
  lstMovimientos : MovimientoI[] | undefined;
  esCliente : boolean = false;

  // Constructor
  constructor(private api : WsTestBiService) {}

  //
  dashboardForm = new FormGroup({
    nombre : new FormControl(''),
    apellido : new FormControl(''),
    edad : new FormControl<number>(0),
    cuenta : new FormControl(''),
    cargo : new FormControl(''),
    fechaCreacion : new FormControl(''),
    tipo : new FormControl(''),
    saldoActual : new FormControl<number>(0)
  });
  dashboardFormSaldo = new FormGroup({
    saldoActual : new FormControl<number>(0)
  });
  codigoForm = new FormGroup({
    codigo : new FormControl('')
  })
  ngOnInit() : void {
  }

  onBuscarUsuario(userIdForm : FormGroup) {
    let header : HeaderI = {
      ipAddress : "",
      channel : "TEST",
      customerId : "000000000",
      additionalCusId : "",
      sequential : "0000000001",
      dateAndTime : "",
      userId : "BMALEN",
      productCode : "01",
      serviceCode : "01",
      tranServiceCode : "01",
      groupId : "B1",
      bankId : "01"
    }
    let peticion : PeticionI = {
      header,
      userId: userIdForm.value.codigo
    };
    this.api.obtenerUsuarios(peticion).subscribe(data => {
      if(null === data) {
        
      } else {

      }
      console.log(data);
      this.respuesta = data;
      this.usuario = this.respuesta.usuario;
      this.lstMovimientos = this.usuario.lstMovimiento;

      this.dashboardForm.patchValue(this.usuario);
      this.dashboardFormSaldo.patchValue(this.respuesta);

      if(this.usuario.tipo === 'CLIENTE') {
        this.esCliente = true;
      }
    })
  }
}
