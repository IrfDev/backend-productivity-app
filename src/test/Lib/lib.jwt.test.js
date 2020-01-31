require('dotenv').config()
const jwt = require('../../Lib/jwt')

describe('JWT', () => {
    it('Sign- should return a valid webToken when we send a payload', async() => {
        const em = 'iasl96@msn.com'
        const pw = 'teamoaime'
        const jwtSign = jwt.sign({ email: em, password: pw })
        expect(jwtSign).not.toContain('teamoaime')
    })
    it('Verify - should return a boolean depend if the WT is correct', async() => {
        const verifyToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJjYTRmYWNjMWYyZTJmMzI0ZTMxMjgiLCJpYXQiOjE1ODA0Mzg3OTd9.UL80wz7MUwGmrsjQw6i4VZHGYW0sB9lyWbd9tZAHBh4")
        expect(verifyToken).not.toBe('invalid signature')
    })
})