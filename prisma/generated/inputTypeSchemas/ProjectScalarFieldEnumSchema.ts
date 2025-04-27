import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id','title','city','country','description','image','style','createdAt','updatedAt','clientId']);

export default ProjectScalarFieldEnumSchema;
