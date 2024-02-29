import { AbstractControl } from "@angular/forms";

export function ValidateMaritalStatus(control: AbstractControl):{[key:string]:boolean}{
    if(!( (control.value =="Single") || (control.value =="single") || (control.value =="Married") || (control.value =="married") )){
        return {'notValid': true};
    }
    return null;
}