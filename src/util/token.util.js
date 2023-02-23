import jwt from 'jsonwebtoken'

export default (payload) => {
    const token = jwt.sign(payload, 'JWTSECRET', {expiresIn: '1h'});
    return token;
}