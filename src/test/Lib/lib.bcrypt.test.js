const bcrypt = require('../../Lib/bcrypt')

describe('absolute', () => {
    it('Absolute- should return an hashed array from the plainedString', async() => {
        const plainedText = 'holacomoestas'
        const hashedString = await bcrypt.hash(plainedText)
        expect(hashedString).not.toBe('holacomoestas')
    })
})