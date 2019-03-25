import colorslist from '../src/colorslist';
import Color from '../src/Color';

test('Matching color', () => {
    const color = new Color('blue');
    expect(color.hex).toBe("#0000ff");
    expect(color.rgb).toBe("rgb(0,0,255)");
    expect(color.rgba).toBe("rgba(0,0,255,1)");
})
test('Should set by hex', () => {
    const color = new Color('#0000ff');
    expect(color.hex).toBe("#0000ff");
    expect(color.rgb).toBe("rgb(0,0,255)");
    expect(color.rgba).toBe("rgba(0,0,255,1)");
})
test('Should set by rgb', () => {
    const color = new Color('rgb(0,0,255)');
    expect(color.hex).toBe("#0000ff");
    expect(color.rgb).toBe("rgb(0,0,255)");
    expect(color.rgba).toBe("rgba(0,0,255,1)");
})
test('Should set by rgba', () => {
    const color = new Color('rgb(0,0,255,1)');
    expect(color.rgba).toBe("rgb(0,0,255,1)");
    expect(color.hex).toBe("#0000ff");
    expect(color.rgb).toBe("rgb(0,0,255)");
})
test('Should throw exception', () => {
    expect(() => new Color('asd')).toThrowError();
    expect(() => new Color('#dssd')).toThrowError();
    expect(() => new Color('#0')).toThrowError();
})