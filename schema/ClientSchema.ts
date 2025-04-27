import { z } from 'zod'

export const ClientSchema = z.object({
  firstName: z.string().min(3).max(60),
  lastName: z.string().min(3).max(60),
  description: z.string().min(60).max(255).nullish(),
  phone: z.string().min(7).max(14),
  email: z.string().email(),
})

export type Client = z.infer<typeof ClientSchema>

export default ClientSchema
