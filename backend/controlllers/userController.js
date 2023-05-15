import User from '../models/userModel.js';
import { hashPassword } from '../utils/utils.js';

// @desc    Auth user and get token
// @route   POST /api/users/login
// @access  Public
export async function authUser(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: await user.generateJWT(),
            });
        } else {
            res.status(401);
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        next(error);
    }
}

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
export async function registerUser(req, res, next) {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(409);
            throw new Error('User already exists');
        } else {
            const user = await User.create({
                name,
                email,
                password,
                // password: await hashPassword(password),
            });
            if (user) {
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: await user.generateJWT(),
                });
            } else {
                res.status(400);
                throw new Error('Invalid user data');
            }
        }
    } catch (error) {
        next(error);
    }
}

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export async function getUserProfile(req, res, next) {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    } catch (error) {
        next(error);
    }
}
