import { z } from 'zod';

export const StyleSchema = z.enum(['minimalist','contemporary','japandy','scandinavian','glam','industrial','rustic','traditional']);

export type StyleType = `${z.infer<typeof StyleSchema>}`

export default StyleSchema;
