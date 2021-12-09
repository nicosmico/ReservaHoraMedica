export interface AuthUser{
    rut: number,
    nombre: String,
    apellido1: String,
    apellido2: String,
    telefono: String,
    correo: String,
    contrasena: String,
    ultima_sesion: Date | null,
    personal_activo: boolean, // true
    rol: number // 1: admin, 0: secre
}