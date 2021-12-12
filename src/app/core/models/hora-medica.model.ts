export interface HoraMedica{
    id?: number,
    fechaInicial: Date
    fechaFinal: Date
    paciente: number|String
    examen: number
    personalMedico: number|String
}