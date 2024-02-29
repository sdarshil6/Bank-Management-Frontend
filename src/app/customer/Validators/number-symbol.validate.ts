import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NoNumberOrSymbolValidator(control: AbstractControl):{[key:string]:boolean} {
    const value: string = control.value;
    
    // Regular expression to check if the value contains numbers or symbols
    const regex = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (regex.test(value)) {
      // Return validation error if value contains numbers or symbols
      return { 'numSym': true };
    } else {
      // Return null if validation passes
      return null;
    }
  
}