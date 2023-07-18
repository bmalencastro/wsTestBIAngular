import { UsuarioI } from "./usuario.interface";

export interface RespuestaI {
    usuario : UsuarioI;
    saldoActual : number;
    mensajeCodigo : number;
    mensaje : string;
}