import Palette from '../src/Palette'
import Gradient from '../src/Gradient';
import Shade from '../src/Shade';
describe('Types test', () => {
    test('Incorrect type', () => {
        expect(() => new Palette('123')).toThrow();
    })
    test('Gradient type', () => {
        expect(new Palette('gradient', 'blue', 'red')).toBeInstanceOf(Gradient);
    })
    test('Shade type', () => {
        expect(new Palette('shade', 'blue')).toBeInstanceOf(Shade);
    })

})
describe('Correct colors count', () => {
    test('Gradient normal', () => {
        const palette = new Palette('gradient', 'red', 'yellow');
        expect(palette.ankerColorPoints).toEqual(['red', 'yellow']);
    })
    test('Gradient 1 argument', () => {
        const palette = new Palette('gradient', 'red');
        expect(palette.ankerColorPoints).toEqual(['red']);
    })
    test('Shade normal', () => {
        const palette = new Palette('shade', 'red');
        expect(palette.color).toEqual('red');
    })
    test('Shade than more 1 color', () => {
        const palette = new Palette('shade', 'red', 'blue', 'yellow');
        expect(palette.color).toEqual('red');
    })
})