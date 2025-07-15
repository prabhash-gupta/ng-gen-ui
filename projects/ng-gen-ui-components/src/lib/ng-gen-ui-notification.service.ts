import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NgGenUiNotificationService {
  constructor(private snackBar: MatSnackBar) {}

  open(message: string, action: string = 'Close', config?: MatSnackBarConfig) {
    this.snackBar.open(message, action, {
      duration: 3000,
      ...config,
    });
  }
}
