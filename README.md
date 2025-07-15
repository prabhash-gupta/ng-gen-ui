
# NgGenUi

Reusable Angular Material UI components library for Angular 19+ projects.

## Features
- Standalone, generic, and reusable Angular Material components
- Easy integration into any Angular project
- Includes input, date-picker, and single select components (more coming soon)

## Installation

### From npm (public)
```bash
npm install ng-gen-ui
```

### From GitHub Packages
```bash
npm install @prabhash-gupta/ng-gen-ui --registry=https://npm.pkg.github.com/
```

> **Peer dependencies:**
> Make sure your project uses Angular 19+ and Angular Material 19+.

## Usage

### 1. Import Angular Material Modules
Ensure your app imports `BrowserAnimationsModule` and has Angular Material set up.

### 2. Import and Use Components

#### Input Component
```typescript
import { NgGenUiInputComponent } from 'ng-gen-ui';
// or from '@prabhash-gupta/ng-gen-ui' if using GitHub Packages
```

```html
<ng-gen-ui-input
  label="Username"
  placeholder="Enter your username"
  [(value)]="username"
  [type]="'text'"
  [disabled]="false"
  hint="This will be your login ID"
></ng-gen-ui-input>
```

#### Date Picker Component
```typescript
import { NgGenUiDatePickerComponent } from 'ng-gen-ui';
// or from '@prabhash-gupta/ng-gen-ui' if using GitHub Packages
```

```html
<ng-gen-ui-date-picker
  label="Date of Birth"
  [(value)]="dob"
  [disabled]="false"
  hint="Select your birth date"
></ng-gen-ui-date-picker>
```

#### Single Select Component
```typescript
import { NgGenUiSingleSelectComponent, NgGenUiSelectOption } from 'ng-gen-ui';
// or from '@prabhash-gupta/ng-gen-ui' if using GitHub Packages
```

```html
<ng-gen-ui-single-select
  label="Country"
  [options]="countryOptions"
  [(value)]="selectedCountry"
  placeholder="Select a country"
  [disabled]="false"
></ng-gen-ui-single-select>
```

```typescript
countryOptions: NgGenUiSelectOption[] = [
  { value: 'in', label: 'India' },
  { value: 'us', label: 'USA' },
  { value: 'uk', label: 'UK' }
];
selectedCountry = null;
```

### 3. Standalone Usage
You can use these components in standalone components or modules. Just add them to the `imports` array of your component.

## API Reference

### NgGenUiInputComponent
| Input         | Type     | Description                       |
|-------------- |----------|-----------------------------------|
| label         | string   | Field label                       |
| placeholder   | string   | Placeholder text                  |
| value         | string   | Input value (two-way binding)     |
| type          | string   | Input type (text, password, etc.) |
| disabled      | boolean  | Disable the input                 |
| maxlength     | number   | Max length                        |
| minlength     | number   | Min length                        |
| autocomplete  | string   | Autocomplete attribute            |
| hint          | string   | Hint text                         |

### NgGenUiDatePickerComponent
| Input         | Type        | Description                       |
|-------------- |------------|-----------------------------------|
| label         | string      | Field label                       |
| placeholder   | string      | Placeholder text                  |
| value         | Date \| null | Date value (two-way binding)      |
| disabled      | boolean     | Disable the picker                |
| autocomplete  | string      | Autocomplete attribute            |
| hint          | string      | Hint text                         |

### NgGenUiSingleSelectComponent
| Input         | Type                        | Description                       |
|-------------- |----------------------------|-----------------------------------|
| label         | string                      | Field label                       |
| placeholder   | string                      | Placeholder text                  |
| value         | any                         | Selected value (two-way binding)  |
| options       | NgGenUiSelectOption[]       | Options for the select            |
| disabled      | boolean                     | Disable the select                |

## Building the Library

```bash
ng build ng-gen-ui
```

## Publishing

### To npm (public)
```bash
cd dist/ng-gen-ui
npm publish --access public
```

### To GitHub Packages
```bash
cd dist/ng-gen-ui
npm publish --access public --registry=https://npm.pkg.github.com/
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests on [GitHub](https://github.com/prabhash-gupta/ng-gen-ui).

## License

MIT
