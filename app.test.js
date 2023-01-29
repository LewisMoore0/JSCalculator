import { add } from './app.js'

describe('Calculator', () => {
    test('should add given arguments together', () => {
        expect(add(1, 2)).toEqual(3)
    }) 
})