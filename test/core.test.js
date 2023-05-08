import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })
})

describe('Multiply', () => {
    test('Deberia 4 * 4 = 16', () => {
        expect(core.mul(4, 4)).toBe(16); 
    })

    test('Deberia 2 * 0 = 0', () => {
        expect(core.mul(2, 0)).toBe(0); 
    })

    test('Deberia 5 * -3 = -15', () => {
        expect(core.mul(5, -3)).toBe(-15); 
    })
})
