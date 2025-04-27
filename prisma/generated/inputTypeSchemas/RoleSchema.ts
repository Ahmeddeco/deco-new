import { z } from 'zod';

export const RoleSchema = z.enum(['admin','superAdmin']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
