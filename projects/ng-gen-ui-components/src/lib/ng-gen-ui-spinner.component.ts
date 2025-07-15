import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'ng-gen-ui-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  template: `
    <div class="ng-gen-ui-spinner" *ngIf="show">
      <mat-spinner [diameter]="diameter" [color]="color"></mat-spinner>
    </div>
  `,
  styles: [`
    .ng-gen-ui-spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(255,255,255,0.5);
      z-index: 1000;
    }
  `]
})
export class NgGenUiSpinnerComponent {
  @Input() show = false;
  @Input() diameter = 40;
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
}
