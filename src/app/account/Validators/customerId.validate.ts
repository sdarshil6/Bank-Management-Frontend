import { AbstractControl } from "@angular/forms";

export function ValidateCustomerId(control: AbstractControl):{[key:string]:boolean}{
    if(control.value <= 0){
        return {'notValid': true};
    }
    return null;
}