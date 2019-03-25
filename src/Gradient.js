import Color from "./Color";

export default class Gradient {
    constructor(colors) {
        this.ankerColorPoints = colors;
        this.colors = this.ankerColorPoints.map(color => new Color(color));
        this.pointsCount = this.ankerColorPoints.length;
        if (colors.length < 2) {
            console.warn(`Gradient will be created for only one color: ${this.ankerColorPoints}.`)
        }
    }
}