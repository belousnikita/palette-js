import Color from "./Color";
// Parses RGBa to an array of Numbers
const parseRGBa = (input) => {
    return input.split("(")[1].split(")")[0].split(",").map(p => Number(p.trim()));
}
// Returns a single rgb color interpolation between given rgb color
// based on the factor given;
const interpolateColor = (color1, color2, factor = 0.5) => {
    const result = color1.slice();
    for (let i = 0; i < 4; i++) {
        const current = result[i] + factor * (color2[i] - color1[i]);
        result[i] = i < 3 ? Math.round(current) : current.toFixed(2);
    }
    return `rgba(${result.join(',')})`;
};
// Function to interpolate between two colors completely, returning an array
const interpolateBetween = (color1, color2, steps) => {
    const stepFactor = 1 / (steps - 1);
    const interpolatedColorArray = [];

    const color1arr = parseRGBa(color1.rgba);
    const color2arr = parseRGBa(color2.rgba);

    for (let i = 0; i < steps; i++) {
        interpolatedColorArray.push(interpolateColor(color1arr, color2arr, stepFactor * i));
    }

    return interpolatedColorArray;
}
// Function to interpolate between two array of colors returning an array
const createGradient = (ankers, splice) => ankers.reduce((acc, current, i, arr) => {
    if (i < arr.length - 1) {
        const interpolatedColors = interpolateBetween(current, arr[i + 1], splice);
        return i > 0 ? [...acc, ...interpolatedColors.slice(1, interpolatedColors.length)]
            : [...acc, ...interpolatedColors];
    } return [...acc];
}, []);
export default class Gradient {
    constructor(colors) {
        this.ankerColorPoints = colors;
        this.colors = this.ankerColorPoints.map(color => new Color(color));
        this.pointsCount = this.ankerColorPoints.length;
        this.min = 0;
        this.max = this.pointsCount - 1;
        this.splice = 2;
        if (colors.length < 2) {
            console.warn(`Gradient will be created for only one color: ${this.ankerColorPoints}.`)
        }
    }
    setPointsRange(min, max) {
        if (max > min) {
            if (max - min > this.ankerColorPoints.length) {
                this.min = min;
                this.max = max;
                this.splice = Math.round((max - min) / (this.ankerColorPoints.length - 1));
                this.colors = createGradient(this.colors, this.splice);
                console.log(this.colors);
                this.pointsCount = this.colors.length;
            } else throw new Error(`Range cannot be smaller than ${this.pointsCount} points.`);
        } else {
            throw new Error(`max ${max} is lower than min ${min}.`);
        }
    }
}