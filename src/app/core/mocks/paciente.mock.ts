import { Usuario } from '../models/usuario.model';

export const pacientesMock: Usuario[] = [
    {
        rut: 11763499,
        nombre: 'Manuel',
        apellido1: 'Bustamante',
        apellido2: 'VIvanco',
        correo: 'manuel@gmail.com',
        personal_activo: false,
        telefono: '+56989799154'
    },
    {
        rut: 6234102,
        nombre: 'Erick',
        apellido1: 'Galvez',
        apellido2: 'Abarca',
        correo: 'erick@gmail.com',
        personal_activo: false,
        telefono: '+56989799154'
    },
    {
        rut: 20515751,
        nombre: 'Mario',
        apellido1: 'Diaz',
        apellido2: 'Diaz',
        correo: 'mario@gmail.com',
        personal_activo: false,
        telefono: '+56989799154'
    }
];