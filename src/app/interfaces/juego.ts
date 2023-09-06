import { Genero } from "./genero";
import { Plataforma } from "./plataforma";

const interface Juego {
    id: number,
    nombre: string,
    desarrolador: string,
    descripcion: string,
    precio: number,
    descuento: number,//porcentaje
    fechaLanzamiento: Date,
    genero?: Genero,
    plataformas?: [Plataforma],
}
