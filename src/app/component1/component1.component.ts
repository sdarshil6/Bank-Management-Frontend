import { Component } from '@angular/core';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.scss'
})
export class Component1Component { 

  constructor(){

  }

  public name:string = "Darshil";

  public isDisabled:boolean = true;

  public greeting:string = "";

  public newName:string = "";

  public isHidden:boolean = true;

  public colors:string[] = ["red", "yellow", "blue"];

  public peopleInfo = [
    {name: "Darshil Shah", age: 22, gender: "Male",country: "India"},
    {name: "Kishan Pithadiua", age: 32, gender: "Male", country: "Germany"},
    {name: "Harshee Dhorajiya", age: 42, gender: "Female", country: "Palestine"},
  ];
  
  public showTable:boolean = true;

  public imagePath:string = "https://img.etimg.com/thumb/width-640,height-480,imgsize-99220,resizemode-75,msid-86044087/news/international/world-news/by-the-people-for-the-people-but-who-really-runs-america/us.jpg";
  public imagePath2:string = "../../favicon.ico";

  public fruits:string[] = ["Apple", "Orange", "Mango", "Banana", "Guava"];
  
  onClickk():void{
    this.greeting = "Hello. How are you?";
  }
}
