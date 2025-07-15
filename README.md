# NgGenUiComponents

Reusable Angular Material UI components library for Angular 19+ projects.

## Features
- Standalone, generic, and reusable Angular Material components
- Easy integration into any Angular project
- Includes input and date-picker components (more coming soon)

## Installation

Install the package from npm:

```bash
npm install ng-gen-ui-components
```

> **Peer dependencies:**
> Make sure your project uses Angular 19+ and Angular Material 19+.

## Usage

### 1. Import Angular Material Modules
Ensure your app imports `BrowserAnimationsModule` and has Angular Material set up.

### 2. Import and Use Components

#### Input Component
```typescript
import { NgGenUiInputComponent } from 'ng-gen-ui-components';
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
import { NgGenUiDatePickerComponent } from 'ng-gen-ui-components';
```

```html
<ng-gen-ui-date-picker
  label="Date of Birth"
  [(value)]="dob"
  [disabled]="false"
  hint="Select your birth date"
></ng-gen-ui-date-picker>
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

## Building the Library

```bash
ng build ng-gen-ui-components
```

## Publishing

```bash
cd dist/ng-gen-ui-components
npm publish --access public
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests on [GitHub](https://github.com/prabhash-gupta/ng-gen-ui).

## License

MIT
