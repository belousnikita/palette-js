import Gradient from './Gradient';
import Shade from './Shade';
const types = {
    gradient: Gradient,
    shade: Shade
}
export default class Palette {
    constructor(type, ...colors) {
        if (types[type]) {
            return new types[type](colors);
        } else throw new Error(`${type} is a wrong type of palette.`);
    }
}