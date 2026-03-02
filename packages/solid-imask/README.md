# Solid IMask Plugin

@bsolute/imask-solid

[![npm version](https://badge.fury.io/js/%40bsolute%2Fimask-solid.svg)](https://badge.fury.io/js/%40bsolute%2Fimask-solid)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<a href="https://opencollective.com/imask/donate" target="_blank">
  <img src="https://opencollective.com/imask/donate/button.png?color=blue" width=300 />
</a>

## Install

`npm install @bsolute/imask-solid`

## Mask Input Example

```javascript
import { createMaskedInput } from "@bsolute/imask-solid";

const NumberInput = createMaskedInput({
  mask: "+{7}(000)000-00-00",
  lazy: false, // make placeholder always visible
  placeholderChar: "#", // defaults to '_'
});

const App = () => {
  return (
    <div>
      <NumberInput
        onAccept={({ value, unmaskedValue, typedValue }, maskRef, e) => {
          console.log({ value, unmaskedValue, typedValue });
          console.log(maskRef);
          console.log(e);
        }}
        onComplete={() => console.log("complete")}
      ></NumberInput>
    </div>
  );
};
```

## Mask Directive Example

```javascript
import { masked } from "@bsolute/imask-solid";

const mask = {
  mask: "+{7}(000)000-00-00",
  lazy: false, // make placeholder always visible
  placeholderChar: "#", // defaults to '_'
};

const App = () => {
  return (
    <div>
      <input
        use:masked={{
          mask,
          onAccept: ({ value, unmaskedValue, typedValue }, maskRef, e) => {
            console.log({ value, unmaskedValue, typedValue });
            console.log(maskRef);
            console.log(e);
          },
          onComplete: () => console.log("complete"),
        }}
      ></input>
      <p
        contenteditable="true"
        use:masked={{
          mask,
          onAccept: ({ value, unmaskedValue, typedValue }, maskRef, e) => {
            console.log({ value, unmaskedValue, typedValue });
            console.log(maskRef);
            console.log(e);
          },
          onComplete: () => console.log("complete"),
        }}
      ></p>
    </div>
  );
};
```
