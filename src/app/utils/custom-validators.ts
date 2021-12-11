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

    // static alfanumerico(control: AbstractControl){
    //     const value = control.value;
    //     const expReg = /^\w+/;

    //     if(!expReg.test(value)){
    //         return { not_valid_aphanumeric: true };
    //     }

    //     return null;
    // }

    static rut(control: AbstractControl){
        return null;
    }

    static emailAviliable(control: AbstractControl){}
    static pacienteExist(control: AbstractControl){}
    static personalMedicoExist(control: AbstractControl){}
    static examenExist(control: AbstractControl){}
}