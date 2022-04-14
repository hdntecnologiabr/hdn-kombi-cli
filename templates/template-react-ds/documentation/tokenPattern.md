<br />
<div style="display: flex; flex-direction:column; align-items:center;">
  <a href="">
    <img src="" alt="Logo" width="250" >
  </a>
  <h2><%= fullName %></h2>
   <span>Design System.</span>
</div>

# Token Pattern

## _`prefix` **-** `themeKey` **-** `scope` **-** `name`_

- _`prefix`_ = <%= prefix %> = <%= fullName %>
- _`themeKey`_ = Key to css property
- _`scope`_ = reference/system/component token
- _`tokenName`_ = the name of the token

### [`<%= prefix %>`] - [`colors / fontSizes / fontWeights `]-[ `ref / sys /comp `]-[`propName`]

## Example

<table>
<thead>
  <th>Prefix</th>
  <th>Theme Key</th>
  <th>Scope</th>
  <th>Token Name</th>
  <th>Final Token Name</th>
  <th>Value</th>
</thead>
<tbody>
  <tr>
    <td><%= prefix %></td>
    <td>fontSizes</td>
    <td>ref</td>
    <td>30</td>
    <td><%= prefix %>-fontSizes-ref-30</td>
    <td>12px</td>
  </tr>
  <tr>
    <td><%= prefix %></td>
    <td>fontSizes</td>
    <td>sys</td>
    <td>text</td>
    <td><%= prefix %>-fontSizes-sys-text</td>
    <td><%= prefix %>-fontSizes-ref-30</td>
  </tr>
  <tr>
    <td><%= prefix %></td>
    <td>fontSizes</td>
    <td>comp</td>
    <td>button-text</td>
    <td><%= prefix %>-fontSizes-comp-button-text</td>
    <td><%= prefix %>-fontSizes-sys-text</td>
  </tr>
   <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><%= prefix %></td>
    <td>space</td>
    <td>ref</td>
    <td>10</td>
    <td><%= prefix %>-space-ref-10</td>
    <td>4px</td>
  </tr>
   <tr>
    <td><%= prefix %></td>
    <td>space</td>
    <td>sys</td>
    <td>background</td>
    <td><%= prefix %>-space-sys-background</td>
    <td><%= prefix %>-space-ref-10</td>
  </tr>
   <tr>
    <td><%= prefix %></td>
    <td>space</td>
    <td>comp</td>
    <td>card</td>
    <td><%= prefix %>-space-comp-card</td>
    <td><%= prefix %>-space-sys-background</td>
  </tr>
   <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><%= prefix %></td>
    <td>colors</td>
    <td>ref</td>
    <td>neutral-10</td>
    <td><%= prefix %>-colors-ref-neutral-10</td>
    <td>`#444B55`</td>
  </tr>
   <tr>
    <td><%= prefix %></td>
    <td>colors</td>
    <td>sys</td>
    <td>text</td>
    <td><%= prefix %>-colors-sys-text</td>
    <td><%= prefix %>-colors-ref-neutral-10</td>
  </tr>
   <tr>
    <td><%= prefix %></td>
    <td>colors</td>
    <td>comp</td>
    <td>button-text</td>
    <td><%= prefix %>-colors-comp-button-text</td>
    <td><%= prefix %>-colors-sys-text</td>
  </tr>
   <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><%= prefix %></td>
    <td>sizes</td>
    <td>ref</td>
    <td>240</td>
    <td><%= prefix %>-sizes-ref-240</td>
    <td>96px</td>
  </tr>
  <tr>
    <td><%= prefix %></td>
    <td>sizes</td>
    <td>sys</td>
    <td>default</td>
    <td><%= prefix %>-sizes-sys-default</td>
    <td><%= prefix %>-sizes-ref-240</td>
  </tr>
  <tr>
    <td><%= prefix %></td>
    <td>sizes</td>
    <td>comp</td>
    <td>button</td>
    <td><%= prefix %>-sizes-comp-button</td>
    <td><%= prefix %>-sizes-sys-default</td>
  </tr>
</tbody>
</table>

# Theme Key

Em resumo Theme Key é a propriedade CSS utilizada para inserir o token, portanto existe um padrão para as propiedades mais utilizadas como relatado na [System UI](https://system-ui.com/theme/) e a ferramenta que utilizamos como Core ([Stitches](https://stitches.dev/docs/tokens#property-mapping)) do no Design System utiliza este padrão.

<table>
<thead>
  <th>System UI Theme Key</th>
  <th>CSS Properties</th>
</thead>
<tbody>
  <tr>
    <td>space</td>
    <td>margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap</td>
  </tr>
  <tr>
    <td>fontSizes</td>
    <td>font-size</td>
  </tr>
  <tr>
    <td>colors</td>
    <td>color, background-color, border-color</td>
  </tr>
  <tr>
    <td>fonts</td>
    <td>font-family</td>
  </tr>
  <tr>
    <td>fontWeights</td>
    <td>font-weight</td>
  </tr>
  <tr>
    <td>lineHeights</td>
    <td>line-height</td>
  </tr>
  <tr>
    <td>letterSpacings</td>
    <td>letter-spacing</td>
  </tr>
  <tr>
    <td>sizes</td>
    <td>width, height, min-width, max-width, min-height, max-height</td>
  </tr>
  <tr>
    <td>borders</td>
    <td>border, border-top, border-right, border-bottom, border-left</td>
  </tr>
  <tr>
    <td>borderWidths</td>
    <td>border-width</td>
  </tr>
  <tr>
    <td>borderStyles</td>
    <td>border-style</td>
  </tr>
  <tr>
    <td>radii</td>
    <td>border-radius</td>
  </tr>
  <tr>
    <td>shadows</td>
    <td>box-shadow, text-shadow</td>
  </tr>
  <tr>
    <td>zIndices</td>
    <td>z-index</td>
  </tr>
  <tr>
    <td>transitions</td>
    <td>transition</td>
  </tr>

</tbody>
</table>

<table>
<thead>
  <th>Custom Theme Key</th>
  <th>CSS Properties</th>
</thead>
<tbody>
  <tr>
    <td>scale</td>
    <td>scale</td>
  </tr>
  <tr>
    <td>opacity</td>
    <td>opacity</td>
  </tr>
  <tr>
    <td>transform</td>
    <td>transform</td>
  </tr>
  <tr>
    <td>transitionDelay</td>
    <td>transition-duration</td>
  </tr>
  <tr>
    <td>trnasitionDuration</td>
    <td>transition-duration</td>
  </tr>
  <tr>
    <td>transitionTimingFunction</td>
    <td>transition-timing-function</td>
  </tr>
</tbody>
</table>
