export interface Admin{
    rut: number,
    nombre: String,
    apellido1: String,
    apellido2: String,
    telefono: String,
    correo: String,
    contrasena: String,
    ultima_sesion: Date,
    personal_activo: boolean, // true
    rol: number // 1: admin
}