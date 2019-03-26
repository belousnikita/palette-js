// Type definitions for [palettejs] [v1.0.0]

export as namespace Gradient;

import Gradient from './Gradient';
import Color from './Colort';
// Type of palette

declare class Gradient {
    constructor();

    min: Number; // Minimum range
    max: Number; // Maximum range
    colors: Color[]; // Array of Colors
    ankerColorPoints: string[] // Array of initial color points

    /**
    * Setting range of colors.
    * @param min minimum of range
    * @param max maximum of range
    */
    setPointsRange(min: Number, max: Number): void;


    /**
    * Get color at postition on range.
    * @param i postion on range;
    */
    getColor(i: Number): Color;
}

export = Gradient;