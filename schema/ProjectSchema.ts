import StyleSchema from '@/prisma/generated/inputTypeSchemas/StyleSchema'
import { z } from 'zod'

export const ProjectSchema = z.object({
  style: StyleSchema,
  title: z.string().min(3).max(60),
  city: z.string().max(60),
  country: z.string().max(60),
  description: z.string().min(60).max(255),
  image: z.string().array(),
})

export type Project = z.infer<typeof ProjectSchema>

export default ProjectSchema
