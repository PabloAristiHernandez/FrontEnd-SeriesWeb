export interface Componente{
    icon: string;
    name: string;
    redirectTo: string;
}

export interface Serie {
    _id: string;
    titulo: string;
    categoria: [string];
    num_capitulos: number;
    sinopsis: string;
   // puntuacion: [number];
    formPuntuacion: [{
        correo: string,
        puntuacion: number
    }];
    imagen: [string];
    year: number;
}
