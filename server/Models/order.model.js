import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
            format: { type: String, enum: ['hardcopy', 'pdf'], required: true },
            quantity: { type: Number, default: 1 },
            price: { type: Number, required: true }, // Store price at the time of purchase
        }
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'completed', 'canceled'],
        default: 'pending',
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ['paid', 'unpaid'],
        default: 'unpaid',
    }
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);
