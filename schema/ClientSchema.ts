import { z } from 'zod'

export const ClientSchema = z.object({
  firstName: z.string().min(3).max(60),
  lastName: z.string().min(3).max(60).nullish(),
  phone: z.string().min(7).max(14),
  email: z.string(),
})

export type Client = z.infer<typeof ClientSchema>

export default ClientSchema
