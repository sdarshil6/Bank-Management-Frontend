import { AbstractControl } from "@angular/forms";

export function ValidateGender(control: AbstractControl):{[key:string]:boolean}{
    if(!( (control.value =="Male") || (control.value =="male") || (control.value =="Female") || (control.value =="female") )){
        return {'notValid': true};
    }
    return null;
}