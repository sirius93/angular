import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';
@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
            <my-tutorial></my-tutorial>`,
  directives: [TutorialsComponent]
})
export class AppComponent { }
