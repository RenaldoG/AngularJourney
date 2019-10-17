import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // define string property
  name:string = 'Brad';

  surname:string = 'Brady';

  constructor() {
    this.changeName('John');
  }

  changeName(name:string):void {
    this.name = name;
  }

}
