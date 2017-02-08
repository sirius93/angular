import { Component } from '@angular/core';

@Component({
  selector: 'my-tutorial',
  template: `<h2>{{title}}</h2>
            <img [src]="imgLink">
            <div [class.myclass]="applyclass">Apply myclass</div>
            <div [style.color]="applyblue? 'blue' : 'red' ">Apply myclass</div>
            <button (click)="OnClick()">Click</button>
            <input type="text" [(ngModel)]=fname>
            <input type="text" [(ngModel)]=lname>
            <br/>
            Fullname: {{ fname }} {{ lname }}`,
  styles: [`.myclass{
  color:red;
  }`]
})

export class TutorialsComponent{
public title = "tutorials from me";
public imgLink = "http://lorempixel.com/400/300/";
public fname;
public lname;
public applyclass = true;
public applyblue = true;
OnClick(){
console.log("value");
}
}
