import { z } from 'zod';

export const ClientScalarFieldEnumSchema = z.enum(['id','firstName','lastName','phone','email']);

export default ClientScalarFieldEnumSchema;
