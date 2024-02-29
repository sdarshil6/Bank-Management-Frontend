import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePipe'
})
export class MyCustomPipePipe implements PipeTransform {

  transform(value: string, gender:string): string {
    if(gender == "male" || gender == "Male"){
      return "Mr. " + value;
    }
    
      return "Ms. " + value;
    
  }

}
