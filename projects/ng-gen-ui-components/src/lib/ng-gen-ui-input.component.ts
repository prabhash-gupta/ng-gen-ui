import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ng-gen-ui-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, NgIf],
  template: `
    <mat-form-field appearance="fill" style="width: 100%;">
      <mat-label *ngIf="label">{{ label }}</mat-label>
      <input matInput
             [type]="type"
             [placeholder]="placeholder"
             [value]="value"
             [disabled]="disabled"
             (input)="onInput($event)"
             [attr.aria-label]="ariaLabel"
             [attr.maxlength]="maxlength"
             [attr.minlength]="minlength"
             [attr.autocomplete]="autocomplete">
      <mat-hint *ngIf="hint">{{ hint }}</mat-hint>
    </mat-form-field>
  `,
  styles: [':host { display: block; }']
})
export class NgGenUiInputComponent {
  @Input() label?: string;
  @Input() placeholder: string = this.label ? `Enter ${this.label}` : '';
  @Input() value: string = '';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() ariaLabel?: string;
  @Input() maxlength?: number;
  @Input() minlength?: number;
  @Input() autocomplete?: string;
  @Input() hint?: string;

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }
}
