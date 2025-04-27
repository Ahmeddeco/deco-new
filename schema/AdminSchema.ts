import RoleSchema from '@/prisma/generated/inputTypeSchemas/RoleSchema'
import { z } from 'zod'

export const AdminSchema = z.object({
  firstName: z.string().min(3).max(60),
  lastName: z.string().min(3).max(60).nullish(),
  description: z.string().min(60).max(255).nullish(),
  phone: z.string().min(7).max(14),
  email: z.string().email(),
  role: RoleSchema,
})

export type Admin = z.infer<typeof AdminSchema>

export default AdminSchema
