# Angular IMask Plugin
@bsolute/imask-angular

[![npm version](https://badge.fury.io/js/%40bsolute%2Fimask-angular.svg)](https://badge.fury.io/js/%40bsolute%2Fimask-angular)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<a href="https://opencollective.com/imask/donate" target="_blank">
  <img src="https://opencollective.com/imask/donate/button.png?color=blue" width=300 />
</a>

## Install
`npm install @bsolute/imask-angular`

## Setup
```javascript
import { IMaskModule } from '@bsolute/imask-angular';

@NgModule({
  imports: [
    IMaskModule,
    ...
  ],
  ...
}) {...}
```

## Usage
```html
<!-- directive -->
<input
  [imask]="{mask: '+{7}(000)000-00-00'}"  <!--see more mask props in a guide-->
  [unmask]="true"  <!--true|false|'typed'-->
  (accept)="onAccept"  <!--depending on prop above first argument is
    `value` if `unmask=false`,
    `unmaskedValue` if `unmask=true`,
    `typedValue` if `unmask='typed'`-->
  (complete)="onComplete"
  <!-- OPTIONAL: provide custom element getter -->
  [imaskElement]="(elementRef, directiveRef) => maskElement" <!-- default = elementRef.nativeElement -->
/>

<!-- pipe -->
<p>{{ value | imask:mask }}</p>
```
More options see in a [guide](https://harlamenko.github.io/imaskjs/guide.html).

## Development
As to make changes to this package follow the steps:

1. Build imask
```
  npm run make
```
2. Go to angular-imask directory
```
  cd packages/angular-imask
```
3. Launch dev command
```
  npm run dev
```

4. (Optional) Launch example app
```
  npm run example
```
