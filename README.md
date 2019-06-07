# color-palette-js
Tool for creating color palettes and gradiens.

# Installation 

```sh
$ npm install color-palette-js
```
or
```sh
$ yarn add color-palette-js
```

##API

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

const colors = blueRedYellow.colors; // => [ Color {}, Color {} ... ] 
```

### Example 
```javascript

  const shadeOfBlue = new Palette("shade", "blue");

  const gradient = new Palette("gradient", "#40cff7", "#d05ddd", "yellow");

  shadeOfBlue.setPointsRange(0, 22);

  gradient.setPointsRange(0, 45);
```
Result: 
![Result](http://i.piccy.info/i9/7e398462de3e7a23f06295111bd21de4/1553594289/64646/1309699/Snymok_ekrana_ot_2019_03_26_11_45_53.png)

[![Edit color-palette-js demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/m54oxkz6m8?fontsize=14)
