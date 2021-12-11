import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';

@Pipe({
  name: 'rutToName'
})
export class RutToNamePipe implements PipeTransform {

  transform(rut: String|number, usuarios: Usuario[]): String {
    let usuario: Usuario = usuarios.find(usuario => usuario.rut == rut);
    return usuario.nombre+' '+usuario.apellido1+' '+usuario.apellido2;
  }

}
