# spectrum-css-grid

A CSS-Grid implementation of the [Spectrum][spectrum-link] Design Language's grid system.

## Goals

Provide a CSS Grid 1 implementation of Spectrum's responsive grid targetting evergreen browsers, for use both in applications and web sites.

## Installation

Download and link `dist/spectrum-css-grid.css` in your project, along with the Custom Properties flavour of Spectrum CSS (https://github.com/adobe/spectrum-css#css-custom-properties-strategy).

## Usage

### The Grid's Role in Layout

In the world of the Spectrum design language, regardless of whether you are making an informational website or a rich application experience, the grid is solely for laying out the regions of the content. That is what this grid implementation is intended to help with.

It is not meant to be used for the chrome/frame of the experience. For example, the navigation or any left/right locked panels.

Clear examples of do's and do not's can be found in the official Spectrum documentation.

### Browser Support

This grid officially supports all browsers that implement CSS Grid Level 1 and Custom Properties. Refer to [Can I Use: css-grid](http://caniuse.com/#feat=css-grid) for current stats. Note that only unprefixed implementations are supported. 

### Getting started

Layout regions need to exist as immediate children to the container (`spectrum-grid` or `spectrum-grid--fixed`). Define each layout region's column span using the `grid-column` property in your stylesheet.

Check out the [demo page](http://opensource.adobe.com/spectrum-css-grid/) with examples of the grid system.

### Example

HTML
```
<main class="spectrum-grid">
  <div id="example1"></div>
  <div id="example2"></div>
</main>
```

CSS
```
#example1 {grid-column: 1/5;}
#example1 {grid-column: 5/13;}

```

### A CSS Grid Primer

The magic of CSS Grid is that once Spectrum sets up the underlying structure of the container, you are free to do whatever you want with standard CSS properties. To learn about how to work effectively with the grid, watch Rachel Andrew's quick video tutorial series: https://gridbyexample.com/video/

## Contributing

Contributions are welcomed! Read the [Contributing Guide](CODE_OF_CONDUCT.md) for more information.

## Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
