import { z } from 'zod';
import { StyleSchema } from '../inputTypeSchemas/StyleSchema'

/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////

export const ProjectSchema = z.object({
  style: StyleSchema,
  id: z.string(),
  title: z.string().min(3).max(60),
  city: z.string().max(60),
  country: z.string().max(60),
  description: z.string().min(60).max(255),
  image: z.string().array(),
  createdAt: z.date(),
  updatedAt: z.date(),
  clientId: z.string(),
})

export type Project = z.infer<typeof ProjectSchema>

export default ProjectSchema;
