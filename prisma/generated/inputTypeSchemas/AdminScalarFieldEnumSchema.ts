import { z } from 'zod';

export const AdminScalarFieldEnumSchema = z.enum(['id','firstName','lastName','description','phone','email','role','createdAt','updatedAt']);

export default AdminScalarFieldEnumSchema;
