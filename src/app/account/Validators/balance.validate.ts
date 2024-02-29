import { AbstractControl } from "@angular/forms";

export function ValidateBalance(control: AbstractControl):{[key:string]:boolean}{
    if(control.value < 500){
        return {'notValid': true};
    }
    return null;
}