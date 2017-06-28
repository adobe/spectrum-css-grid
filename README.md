![spectrum-logo](https://git.corp.adobe.com/storage/user/655/files/a13fda74-9d4a-11e6-9aec-1b320823594a)
# spectrum-css-grid
CSS-Grid property specs for the [Spectrum][spectrum-link] Design Language.

## Usage
Download and link `dist/spectrum-css-grid.css` in your project. Use CSS Grid properties for your layout regions or page layouts.

Layout regions need to exist as immediate children to the container (`spectrum-grid--fluid` or `spectrum-grid--fixed`). Define each layout region's column span using the `grid-column` property in your stylesheet.

Check out the [demo page](https://git.corp.adobe.com/pages/Spectrum/spectrum-css-grid/) with examples of the grid system.

### Example
HTML
```
<main class="spectrum-grid--fluid">
  <div id="example1"></div>
  <div id="example2"></div>
</main>
```

CSS
```
#example1 {grid-column: 1/5;}
#example1 {grid-column: 5/13;}

```

## Learn More
For [general information](https://git.corp.adobe.com/Spectrum/README) about the projects in this org, how to communicate with the development team, where to file issues, or how to contribute, please check out the generic [Spectrum/README](https://git.corp.adobe.com/Spectrum/README) information.

Thanks - Adobe Design Frameworks

[spectrum-link]: http://spectrum.corp.adobe.com
[topdoc-link]: https://github.com/Topdoc/topdoc/wiki
