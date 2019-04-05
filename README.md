![spectrum-logo](https://git.corp.adobe.com/storage/user/655/files/a13fda74-9d4a-11e6-9aec-1b320823594a)
# spectrum-css-grid

CSS-Grid property specs for the [Spectrum][spectrum-link] Design Language.

## Support
This grid officially supports all browsers that implement CSS Grid Level 1. For a list of the known CSS Grid bugs that we have addressed, see [this issue](https://git.corp.adobe.com/betts/spectrum-css-grid/issues/5).

We decided against [IE 11 support](https://git.corp.adobe.com/betts/spectrum-css-grid/issues/7) for the time being.

## The Grid's Role in Layout

In the world of the Spectrum design language, regardless of whether you are making an informational website or a rich application experience, the grid is solely for laying out the regions of the content. That is what this grid implementation is intended to help with.

It is not meant to be used for the chrome/frame of the experience. For example, the navigation or any left/right locked panels.

Clear examples of do's and do not's can be found in the official Spectrum documentation. Please **do not** use the grid for the [application frame](https://spectrum.corp.adobe.com/application-frame.html). Please **do** us it for [things within the frame](https://spectrum.corp.adobe.com/grid.html#offsetting-the-grid).

## Usage

[Can I Use css-grid?](http://caniuse.com/#feat=css-grid) Data on support for the css-grid feature across the major browsers from caniuse.com.

![Data on support for the css-grid feature across the major browsers from caniuse.com](https://res.cloudinary.com/ireaderinokun/image/upload/v1554434874/caniuse-embed/css-grid-2019-4-5.png)

*CanIUse screenshot last updated April 4, 2019*

### Getting started
Download and link `dist/spectrum-css-grid.css` in your project. Use CSS Grid properties for your layout regions or page layouts.

Layout regions need to exist as immediate children to the container (`spectrum-grid--fluid` or `spectrum-grid--fixed`). Define each layout region's column span using the `grid-column` property in your stylesheet.

Check out the [demo page](https://git.corp.adobe.com/pages/betts/spectrum-css-grid/) with examples of the grid system.

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

### A CSS Grid Primer

The magic of CSS Grid is that once Spectrum sets up the underlying structure of the container, you are free to do whatever you want with standard CSS properties. To learn about how to work effectively with the grid, watch Rachel Andrew's quick video tutorial series: https://gridbyexample.com/video/

## Learn More
For [general information](https://git.corp.adobe.com/Spectrum/README) about the projects in this org, how to communicate with the development team, where to file issues, or how to contribute, please check out the generic [Spectrum/README](https://git.corp.adobe.com/Spectrum/README) information.

Thanks - Adobe Design Frameworks

[spectrum-link]: http://spectrum.corp.adobe.com
[topdoc-link]: https://github.com/Topdoc/topdoc/wiki
