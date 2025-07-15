import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ng-gen-ui-date-picker',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, NgIf],
  template: `
    <mat-form-field appearance="fill" style="width: 100%;">
      <mat-label *ngIf="label">{{ label }}</mat-label>
      <input matInput
             [matDatepicker]="picker"
             [placeholder]="placeholder"
             [value]="value"
             [disabled]="disabled"
             (dateChange)="onDateChange($event)"
             (input)="onInput($event)"
             [attr.aria-label]="ariaLabel"
             [attr.autocomplete]="autocomplete">
      <mat-datepicker #picker></mat-datepicker>
      <mat-hint *ngIf="hint">{{ hint }}</mat-hint>
    </mat-form-field>
  `,
  styles: [':host { display: block; }']
})
export class NgGenUiDatePickerComponent {
  @Input() label?: string;
  @Input() placeholder: string = this.label ? `Enter ${this.label}` : '';
  @Input() value: Date | null = null;
  @Input() disabled: boolean = false;
  @Input() ariaLabel?: string;
  @Input() autocomplete?: string;
  @Input() hint?: string;

  @Output() valueChange = new EventEmitter<Date | null>();

  onDateChange(event: any) {
    this.valueChange.emit(event.value);
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const date = input.value ? new Date(input.value) : null;
    this.valueChange.emit(date);
  }
}
