import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: String,
    avatar: String,
    role: {
        type: String,
        enum: ['buyer', 'admin'],
        default: 'buyer',
    },
    cart: [
        {
            book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
            format: String, // "hardcopy" or "pdf"
            quantity: { type: Number, default: 1 },
        }
    ],
}, { timestamps: true });

// Middleware to enforce a single admin
userSchema.pre('save', async function (next) {
    if (this.role === 'admin') {
        const adminExists = await mongoose.model('User').exists({ role: 'admin' });
        if (adminExists) {
            const error = new Error("Only one admin account is allowed.");
            return next(error);
        }
    }
    next();
});

export const User = mongoose.model('User', userSchema);
