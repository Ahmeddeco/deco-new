import { z } from 'zod';

/////////////////////////////////////////
// ARTICLE SCHEMA
/////////////////////////////////////////

export const ArticleSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(60),
  mainParagraph: z.string().min(60).max(1000),
  image: z.string().url(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Article = z.infer<typeof ArticleSchema>

export default ArticleSchema;
