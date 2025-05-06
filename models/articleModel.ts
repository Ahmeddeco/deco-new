import mongoose, { InferSchemaType, Schema } from 'mongoose'

const articleSchema = new mongoose.Schema(
  {
    title: {
      ar: { type: String, required: true, maxLength: 256, minLength: 3 },
      en: { type: String, required: true, maxLength: 256 ,minLength: 3},
    },
    mainParagraph: {
      ar: { type: String, required: true, maxLength: 1024, minLength: 30 },
      en: { type: String, required: true, maxLength: 1024, minLength: 30 },
    },
    points: [{
      title: {
        ar: { type: String, required: true, maxLength: 256, minLength: 3 },
        en: { type: String, required: true, maxLength: 256, minLength: 3 },
      },
      paragraph: {
        ar: { type: String, required: true, maxLength: 1024, minLength: 30 },
        en: { type: String, required: true, maxLength: 1024, minLength: 30 },
      }
    }],
    endParagraph: {
      ar: { type: String, required: true, maxLength: 1024, minLength: 30 },
      en: { type: String, required: true, maxLength: 1024, minLength: 30 },
    },
    mainSources: [{
      name: { type: String, required: true },
      url: { type: String, required: true },
    }],
    image: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }, // Reference to Author
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
)

type ProjectType = InferSchemaType<typeof articleSchema>

const Article = mongoose.models.Article || mongoose.model('Article', articleSchema)
const ArticleType = typeof articleSchema

export type { ArticleType }
export default Article