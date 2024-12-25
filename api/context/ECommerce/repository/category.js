import mongoose from 'mongoose';

const schema = mongoose.Schema({
    name: {
        type: String,
        trim: true, // clean up space at beginning and end,
        required: true,
        maxLength: 32,
        unique: true // don't allow multiple categories of the same name
    },
    slug: { // URL friendly version of the category
        type: String,
        unique: true,
        lowercase: true,
    }
});

export default mongoose.model('Category', schema);