import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'

/////////////////////////////////////////
// ADMIN SCHEMA
/////////////////////////////////////////

export const AdminSchema = z.object({
  role: RoleSchema,
  id: z.string(),
  firstName: z.string().min(3).max(60),
  lastName: z.string().min(3).max(60).nullish(),
  description: z.string().min(60).max(255).nullish(),
  phone: z.string().min(7).max(14),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Admin = z.infer<typeof AdminSchema>

export default AdminSchema;
