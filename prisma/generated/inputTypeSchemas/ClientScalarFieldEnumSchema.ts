import { z } from 'zod';

export const ClientScalarFieldEnumSchema = z.enum(['id','firstName','lastName','description','phone','email','createdAt','updatedAt']);

export default ClientScalarFieldEnumSchema;
