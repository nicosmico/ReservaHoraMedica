import { Usuario } from '../models/usuario.model';

export const personalMock: Usuario[] = [
    {
        rut: 19857351,
        nombre: 'Nicolas',
        apellido1: 'Bustamante',
        apellido2: 'Estay',
        correo: 'nico@gmail.com',
        personal_activo: true,
        telefono: '+56989799154'
    },
    {
        rut: 18990380,
        nombre: 'Mariela',
        apellido1: 'Bustamante',
        apellido2: 'Estay',
        correo: 'mari@gmail.com',
        personal_activo: true,
        telefono: '+56989799154'
    },
    {
        rut: 14285043,
        nombre: 'Alejandra',
        apellido1: 'Estay',
        apellido2: 'Muñoz',
        correo: 'ale@gmail.com',
        personal_activo: true,
        telefono: '+56989799154'
    }
];