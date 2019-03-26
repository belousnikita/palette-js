// Type definitions for [palettejs] [v1.0.0]

export as namespace Color;

import Color = require('./Color');



declare class Color {
    // Color string
    constructor(string: string);
    hex: string; // Color in hex
    rgb: string; // Color in rgb
    rgba: string; // Color in rgba
}

export = Color;