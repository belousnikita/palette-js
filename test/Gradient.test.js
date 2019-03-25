
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
test('Throw error', () => {
    expect(() => new Palette('gradient', 'red', 'blue', '1231233')).toThrowError();
})
test('Setting range 0 - 99', () => {
    const palette = new Palette('gradient', 'red', 'blue', 'green');
    expect(palette.min).toBe(0);
    expect(palette.max).toBe(2);
    palette.setPointsRange(0, 99);
    expect(palette.min).toBe(0);
    expect(palette.max).toBe(99);
    expect(palette.colors.length).toBe(99 || 100);
})
test('Setying range 5 - 10', () => {
    const palette = new Palette('gradient', 'red', 'blue', 'green');
    palette.setPointsRange(5, 10);
    expect(palette.colors.length).toBe(5);
    expect(palette.min).toBe(5);
    expect(palette.max).toBe(10);
    expect(palette.colors.length).toBe(5 || 6);
})
test('Setting range 4 - 4 should throw Error', () => {
    const palette = new Palette('gradient', 'red', 'blue', 'green');
    expect(() => palette.setPointsRange(4, 4)).toThrowError();
})
