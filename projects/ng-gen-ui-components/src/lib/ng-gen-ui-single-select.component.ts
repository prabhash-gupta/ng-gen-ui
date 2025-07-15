import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';

export interface NgGenUiSelectOption<T = any> {
  value: T;
  label: string;
}

@Component({
  selector: 'ng-gen-ui-single-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, NgFor, NgIf],
  template: `
    <mat-form-field appearance="fill" style="width: 100%;">
      <mat-label *ngIf="label">{{ label }}</mat-label>
      <mat-select
        [placeholder]="placeholder"
        [disabled]="disabled"
        [value]="value"
        (selectionChange)="onSelectionChange($event)"
        [attr.aria-label]="ariaLabel">
        <mat-option *ngFor="let option of options" [value]="option.value">
          {{ option.label }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [':host { display: block; }']
})
export class NgGenUiSingleSelectComponent<T = any> {
  @Input() label?: string;
  @Input() placeholder: string = this.label ? `Select ${this.label}`: '';
  @Input() value: T | null = null;
  @Input() options: NgGenUiSelectOption<T>[] = [];
  @Input() disabled: boolean = false;
  @Input() ariaLabel?: string;

  @Output() valueChange = new EventEmitter<T | null>();

  onSelectionChange(event: any) {
    this.valueChange.emit(event.value);
  }
}
