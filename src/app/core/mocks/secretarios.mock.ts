import { AuthUser } from '../models/auth-user.model';

export const secretariosMock: AuthUser[] = [
    {
        rut: 12463764,
        nombre: 'Humberto',
        apellido1: 'Chupete',
        apellido2: 'Suazo',
        correo: 'chupete@gmail.com',
        personal_activo: true,
        telefono: '+56989799154',
        contrasena: '123456789',
        rol: 0,
        ultima_sesion: new Date()
    },
    {
        rut: 20828781,
        nombre: 'Messi',
        apellido1: 'Gonzales',
        apellido2: 'Peres',
        correo: 'messi@gmail.com',
        personal_activo: true,
        telefono: '+56989799154',
        contrasena: '123456789',
        rol: 0,
        ultima_sesion: new Date()
    },
];