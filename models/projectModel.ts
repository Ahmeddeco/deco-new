import mongoose, { InferSchemaType, Schema } from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    // slug: Schema.Types.UUID,
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

type ProjectType = InferSchemaType<typeof projectSchema>

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)
const ProjectType = typeof projectSchema

export type { ProjectType }
export default Project