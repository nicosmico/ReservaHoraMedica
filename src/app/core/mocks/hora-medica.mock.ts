import { HoraMedica } from '../models/hora-medica.model';

export const horasMedicasMock: HoraMedica[] = [
    {
        id:1,
        fechaInicial: new Date(2021, 11, 22, 12, 30),
        fechaFinal: new Date(2021, 11, 22, 13, 0),
        examen: 1,
        paciente: 11763499,
        personalMedico:19857351
    },
    {
        id:2,
        fechaInicial: new Date(2021, 11, 22, 9, 0),
        fechaFinal: new Date(2021, 11, 22, 11, 30),
        examen: 6,
        paciente: 6234102,
        personalMedico:14285043
    },
    {
        id:3,
        fechaInicial: new Date(2021, 11, 23, 11, 0),
        fechaFinal: new Date(2021, 11, 23, 11, 30),
        examen: 3,
        paciente: 20515751,
        personalMedico:18990380
    },
];