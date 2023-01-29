import { add, subtract } from './app.js'

describe('Calculator', () => {
    test('should add given arguments together', () => {
        expect(add(1, 2)).toEqual(3)
    }) 

    test('should subtract given arguments', () => {
        expect(subtract(2, 1)).toEqual(1)
    })
})