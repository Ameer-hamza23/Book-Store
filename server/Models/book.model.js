import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    hardcopyStock: { // Stock count for physical books
        type: Number,
        default: 0,
    },
    pdfDownloadLink: { // Link for downloadable PDF, available after purchase
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    format: {
        type: [String], // Array of formats like ["hardcopy", "pdf"]
        required: true,
    },
}, { timestamps: true });

export const Book = mongoose.model('Book', bookSchema);
