import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema(
  {
    authorName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
)

const Author = mongoose.models.Author || mongoose.model('Author', authorSchema)

export default Author