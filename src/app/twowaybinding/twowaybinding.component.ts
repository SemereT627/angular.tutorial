import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  template: ` <div class="mt"></div>
    <br />
    <input [(ngModel)]="name" type="text" /> {{ name }}`,
  styles: [
    `
      .mt {
        margin-top: 20px;
      }
    `,
  ],
})
export class TwowaybindingComponent {
  public name = '';

  constructor() {}
}
