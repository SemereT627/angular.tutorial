import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked a red color</div>
      <div *ngSwitchCase="'blue'">You picked a blue color</div>
      <div *ngSwitchCase="'green'">You picked a green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>

    <h2 *ngIf="displayName; then thenBlock; else elseBlock"></h2>
    <ng-template #thenBlock>
      <h2>Codevolution</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>
  `,
  styles: [``],
})
export class StructuralDirectivesComponent {
  public displayName = true;
  public color = '';
}
