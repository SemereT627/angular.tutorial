import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2 [class]="successClass">Welcome {{ name }}</h2>
    <input [id]="myId" type="text" value="Semere" />
    <input [disabled]="isDisabled" type="text" value="Semere" />
    <h2 class="text-special" [class]="successClass">Codevoluton</h2>
    <h2 [class.text-error]="hasError">Error</h2>

    <h2 [ngClass]="messageClasses">Codevolution</h2>

    <h1 [style.color]="hasError ? 'red' : 'green'">Style binding</h1>
    <h1 [style.color]="highLightColor">Style binding 2</h1>
    <h1 [ngStyle]="titleStyles">Style binding 3</h1>
    <button (click)="onClick($event)">Greet</button>

    <input #myInput type="text" />
    <button (click)="logMessage(myInput)">Log</button> `,
  styles: [
    `
      .text-success {
        color: green;
      }

      .text-special {
        font-style: italic;
      }

      .text-error {
        color: red;
      }
    `,
  ],
})
export class TestComponent {
  public name = 'Semere';
  public myId = 'testId';
  public isDisabled = true;
  public hasError = false;
  public isSpecial = true;

  public highLightColor = 'orange';

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  public messageClasses = {
    'text-success': !this.hasError,
    'text-error': this.hasError,
    'text-special': this.isSpecial,
  };

  public successClass = 'text-success';

  constructor() {}

  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(event: any) {
    console.log(event);
    this.name = event.type;
  }

  logMessage(value: any) {
    console.log(value);
  }
}
