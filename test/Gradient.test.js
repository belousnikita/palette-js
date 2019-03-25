
import Palette from '../src/Palette'

test('Colors creation', () => {
    const palette = new Palette('shade', 'red');
    expect(palette.colors.length).toBe(3);
    expect(palette.colors[0].hex).toBe("#ffffff");
    expect(palette.colors[1].hex).toBe("#ff0000");
    expect(palette.colors[2].hex).toBe("#000000");
})
test('Colors creation 2', () => {
    const palette = new Palette('shade', 'red', 'blue', 'a');
    expect(palette.pointsCount).toBe(3);
    expect(palette.colors.length).toBe(3);
    expect(palette.colors[0].hex).toBe("#ffffff");
    expect(palette.colors[1].hex).toBe("#ff0000");
    expect(palette.colors[2].hex).toBe("#000000");
})
test('Colors creation 3', () => {
    const palette = new Palette('gradient', 'red', 'blue', 'green');
    expect(palette.pointsCount).toBe(3);
    expect(palette.colors.length).toBe(3);
    expect(palette.colors[0].hex).toBe("#ff0000");
    expect(palette.colors[1].hex).toBe("#0000ff");
    expect(palette.colors[2].hex).toBe("#008000");
})
test('Throw', () => {
    expect(() => new Palette('gradient', 'red', 'blue', '1231233')).toThrowError();
})