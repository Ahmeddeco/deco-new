import { z } from 'zod'

export const ArticleSchema = z.object({
  title: z.string().min(3).max(60),
  mainParagraph: z.string().min(60).max(1000),
  image: z.string().url(),
})

export type Article = z.infer<typeof ArticleSchema>

export default ArticleSchema
