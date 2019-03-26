# color-palette-js
Tool for creating color palettes and gradiens.

# Installation 

```sh
$ npm install bg-canvases
```
or
```sh
$ yarn add bg-canvases
```

#API

### new Palette(type, ...colors)

Creates new color palette: shade of one color, or gradient.
Colors must be in their name-codes, hex-format, RGB, or RGBa.

```javascript
const shadeOfBlue = new Palette('shade', 'blue'); // Creates shade of blue 
const blueRedYellow = new Palette('gradient', 'blue', 'red', 'yellow'); // Creates gradient
```
You can mix color codes: 

```javascript
const blueRedYellow = new Palette('gradient', 'blue', '#FF0000', 'rgb(255,255,0)'); // Creates gradient
```

### setPointsRange(min, max)

Set range and interpolate colors.

```javascript
const blueRedYellow = new Palette('gradient', 'blue', 'red'); // Creates gradient

blueRedYellow.setPointsRange(0, 25); // Interpolates 25 colors inbetween blue and red;
```
### getColor(i)

Returns color in range.
```javascript
const blueRedYellow = new Palette('gradient', 'blue', 'red'); // Creates gradient

blueRedYellow.setPointsRange(0, 25);

const color = blueRedYellow.getColor(10); // Returns 10th color in range.

const { rgb, rgba, hex } = color; // You can get color in this formats.

```

### .colors

You can access array of colors directly.

```javascript
const blueRedYellow = new Palette('gradient', 'blue', 'red'); // Creates gradient

blueRedYellow.setPointsRange(0, 25);

const colors = blueRedYellow.color; // => [ Color {}, Color {} ... ] 
```