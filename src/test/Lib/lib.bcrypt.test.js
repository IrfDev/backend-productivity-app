const bcrypt = require('../../Lib/bcrypt')

describe('bcrypt.hased', () => {
    it('BCrypt- should return an hashed array from the plainedString', async() => {
        const plainedText = 'holacomoestas'
        const hashedString = await bcrypt.hash(plainedText)
        expect(hashedString).not.toBe('holacomoestas')
    })
})