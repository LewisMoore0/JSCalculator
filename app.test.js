import { add, subtract, multiply, divide } from './app.js'

describe('Calculator', () => {
    test('should add given arguments together', () => {
        expect(add(1, 2)).toEqual(3)
    }) 

    test('should subtract given arguments', () => {
        expect(subtract(2, 1)).toEqual(1)
    })

    test('should multiply given arguments', () => {
        expect(multiply(2, 2)).toEqual(4)
    })

    test('should divide given arguments', () => {
        expect(divide(10, 2)).toEqual(5)
    })
})