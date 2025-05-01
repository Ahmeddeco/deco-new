import { z } from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id','sessionToken','userId','expires','createdAt','updatedAt']);

export default SessionScalarFieldEnumSchema;
