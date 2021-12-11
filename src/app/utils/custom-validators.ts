import { AbstractControl } from '@angular/forms';

export class CustomValidators{
    static telefono(control: AbstractControl){
        const value = control.value;
        const expReg = /^(\+56)(9)[98765432]\d{7}$/;

        if(!expReg.test(value)){
            return { not_valid_phone: true };
        }

        return null;
    }

    static rut(control: AbstractControl){
        // Codigo desde https://gist.github.com/rotvulpix/69a24cc199a4253d058c

        let rut = control.value;
        // Despejar Puntos
        let valor = rut.replace('.','');
        // Despejar Guión
        valor = valor.replace('-','');
        
        // Aislar Cuerpo y Dígito Verificador
        let cuerpo = valor.slice(0,-1);
        let dv = valor.slice(-1).toUpperCase();
        
        // Formatear RUN
        rut = cuerpo + '-'+ dv
        
        // Si no cumple con el mínimo ej. (n.nnn.nnn)
        if(cuerpo.length < 7) {
            return { incomplete_rut: true };
        }
        
        // Calcular Dígito Verificador
        let suma = 0;
        let multiplo = 2;
        
        // Para cada dígito del Cuerpo
        for(let i=1;i<=cuerpo.length;i++) {
        
            // Obtener su Producto con el Múltiplo Correspondiente
            let index = multiplo * valor.charAt(cuerpo.length - i);
            
            // Sumar al Contador General
            suma = suma + index;
            
            // Consolidar Múltiplo dentro del rango [2,7]
            if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
      
        }
        
        // Calcular Dígito Verificador en base al Módulo 11
        let dvEsperado = 11 - (suma % 11);
        
        // Casos Especiales (0 y K)
        dv = (dv == 'K')?10:dv;
        dv = (dv == 0)?11:dv;
        
        // Validar que el Cuerpo coincide con su Dígito Verificador
        if(dvEsperado != dv) { 
            return { rut_invalido: true };
        }
        
        // eliminar errores (decretar que es válido)
        return null;
    }

    static emailAviliable(control: AbstractControl){}
    static pacienteExist(control: AbstractControl){}
    static personalMedicoExist(control: AbstractControl){}
    static examenExist(control: AbstractControl){}
}