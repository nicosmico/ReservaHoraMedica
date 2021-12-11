import { AuthUser } from '../models/auth-user.model';

export const administradoresMock: AuthUser[] = [
    {
        rut: 13541440,
        nombre: 'Marcelo',
        apellido1: 'Retamal',
        apellido2: 'Morales',
        correo: 'marcelo@gmail.com',
        personal_activo: true,
        telefono: '+56989799154',
        contrasena: '123456789',
        rol: 1,
        ultima_sesion: new Date()
    },
    {
        rut: 14907676,
        nombre: 'Cristobal',
        apellido1: 'Moya',
        apellido2: 'Gonzales',
        correo: 'tobal@gmail.com',
        personal_activo: true,
        telefono: '+56989799154',
        contrasena: '123456789',
        rol: 1,
        ultima_sesion: new Date()
    },
];