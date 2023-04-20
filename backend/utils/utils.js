import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export function hashPassword(password) {
    return bcrypt.hash(password, 10);
}
