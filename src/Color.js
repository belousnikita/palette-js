import colorslist from "./colorslist";
const isHex = string => {
    return /^#[0-9A-F]{6}$/i.test(string);
};
const isRGB = string => {
    return /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.test(
        string
    );
};
const isRGBa = string => {
    return /^(?:rgba?)?[\s]?[\(]?[\s+]?(\d+)[(\s)|(,)]+[\s+]?(\d+)[(\s)|(,)]+[\s+]?(\d+)/i.test(
        string
    );
};
const hexToRgbA = hex => {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return (
            "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)"
        );
    }
    throw new Error("Bad Hex");
};
const hexToRgb = hex => {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return "rgb(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ")";
    }
    throw new Error("Bad Hex");
};
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
    const chanels = rgb.match(/\d+/g);
    const r = parseInt(chanels[0], 10);
    const g = parseInt(chanels[1], 10);
    const b = parseInt(chanels[2], 10);
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const rgbToRgba = rgb => {
    const chanels = rgb.match(/\d+/g);
    const r = parseInt(chanels[0], 10);
    const g = parseInt(chanels[1], 10);
    const b = parseInt(chanels[2], 10);
    return `rgba(${r},${g},${b},1)`;
};
const rgbaToRgb = rgba => {
    const chanels = rgba.match(/\d+/g);
    const r = parseInt(chanels[0], 10);
    const g = parseInt(chanels[1], 10);
    const b = parseInt(chanels[2], 10);
    return `rgb(${r},${g},${b})`;
};
export default class Color {
    constructor(string) {
        const namedColor = colorslist[string];
        if (namedColor) {
            this.rgb = namedColor.rgb;
            this.rgba = namedColor.rgba;
            this.hex = namedColor.hex;
        } else {
            if (isHex(string)) {
                this.hex = string;
                this.rgb = hexToRgb(string);
                this.rgba = hexToRgbA(string);
            } else if (isRGB(string)) {
                this.hex = rgbToHex(string);
                this.rgb = string;
                this.rgba = rgbToRgba(string);
            } else if (isRGBa(string)) {
                this.rgba = string;
                this.rgb = rgbaToRgb(string);
                this.hex = rgbToHex(this.rgb);
            } else {
                throw new Error(`${string} does not match any color (hex, rgb, rgba)`);
            }
        }
    }
}
