import Gradient from './Gradient';
export default class Shade extends Gradient {
    constructor(color) {
        super(['white', color[0], 'black']);
        if (color.length > 1) {
            console.warn(`More than one color in shade. Only ${color[0]} will be used.`)
        }
    }
}