import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    title: {
      ar: { type: String, required: true },
      en: { type: String, required: true },
    },
    city: {
      ar: { type: String, required: true },
      en: { type: String, required: true },
    },
    country: {
      ar: { type: String, required: true },
      en: { type: String, required: true },
    },
    description: {
      ar: { type: String, required: true },
      en: { type: String, required: true },
    },
    images: [{ type: String }], // Array of image URLs
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }, // Reference to Author
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
)

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)

export default Project