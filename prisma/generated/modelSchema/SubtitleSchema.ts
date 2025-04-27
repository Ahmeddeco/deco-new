import { z } from 'zod';

/////////////////////////////////////////
// SUBTITLE SCHEMA
/////////////////////////////////////////

export const SubtitleSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(60),
  paragraph: z.string().min(60).max(500),
  image: z.string().url(),
  articleId: z.string(),
})

export type Subtitle = z.infer<typeof SubtitleSchema>

export default SubtitleSchema;
