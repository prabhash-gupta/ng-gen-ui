import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'ng-gen-ui-notification',
  standalone: true,
  imports: [MatSnackBarModule],
  template: `
    <span class="ng-gen-ui-notification">{{ data }}</span>
  `,
  styles: [`
    .ng-gen-ui-notification {
      color: #fff;
      font-size: 16px;
    }
  `]
})
export class NgGenUiNotificationComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {}
}
