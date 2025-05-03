import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
  title: { ar: { type: String, minLength: 3, maxLength: 255, required: true }, en: { type: String, minLength: 3, maxLength: 255, required: true } },
  city: { ar: { type: String, minLength: 3, maxLength: 64, required: true }, en: { type: String, minLength: 3, maxLength: 64, required: true } },
  country: { ar: { type: String, minLength: 3, maxLength: 64, required: true }, en: { type: String, minLength: 3, maxLength: 64, required: true } },
  description: { ar: { type: String, minLength: 64, maxLength: 500, required: true }, en: { type: String, minLength: 64, maxLength: 500, required: true } },
  images: [String]
}, { timestamps: true })

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)

export default Project