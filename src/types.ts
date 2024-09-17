export type Cliente = {
    id: string,
    nombre: string,
    direccion: string,
    localidad: string,
    telefono: string,
    email: string,
    descripcion: string,
    precio: string,
    ultimaVisita: Date,
    proximaVisita: Date,
}

export type DraftCliente = Omit<Cliente, 'id'>


export type Ingresos = {
    gastos: number,
    ingresos: number
}