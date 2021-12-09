import { AbstractControl } from '@angular/forms';

export class CustomValidators{
    static telefono(control: AbstractControl){
        const value = control.value;
        const expReg = /^(\+56)(9)[98765432]\d{7}$/;

        if(!expReg.test(value)){
            return { not_valid_number: true };
        }

        return null;
    }
}