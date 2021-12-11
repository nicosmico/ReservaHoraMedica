import { Log } from '../models/log.model';

export const logsMock: Log[] = [
    {
        id:1,
        fecha: new Date(),
        accion: 'Borrar usuario 123213',
        usuario: 198573515
    },
    {
        id:2,
        fecha: new Date(),
        accion: 'Crear usuario',
        usuario: 198573515
    },
    {
        id:3,
        fecha: new Date(),
        accion: 'Editar usuario xd',
        usuario: 198573515
    },
    {
        id:4,
        fecha: new Date(),
        accion: 'Borrar examen xd',
        usuario: 198573515
    },
    {
        id:5,
        fecha: new Date(),
        accion: 'Crear hora medica xd',
        usuario: 198573515
    },
];