import { MovimientoI } from "./movimiento.interface";

export interface UsuarioI {
    id : string;
	nombre : string;
	apellido : string;
	edad : number;
	cuenta : string;
	lstMovimiento : MovimientoI[];
	cargo : string;
	fechaCreacion : string;
	tipo : string;
}