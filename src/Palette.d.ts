// Type definitions for [palettejs] [v1.0.0]

export as namespace Palette;
import Palette from './Palette';
import Shade from './Shade';
import Gradient from './Gradient';

// Type of palette
type Type = 'shade' | 'gradient';

declare class Palette {
    /**
    * Create color palette.
    * @param type 'shade' of one color or 'gradient'
    * @param colors color points in hex, rgb or rgba
    */
    constructor(type: Type, ...colors: string[]): Gradient;
}

export = Palette;