const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        user: { type: mongoose.Types.ObjectId, required: true ,ref:'user'},
        title: { type: String, required: true },
        content: { type: String, required: true },
        category: { type: String, required: true },
        likes: { type: Number, required: true },
        date: { type: String, required: true },
        comment: { type: mongoose.Types.ObjectId, ref:'comment'}
    }
)

module.exports = mongoose.model('blog',blogSchema)