import { z } from 'zod';

export const ArticleScalarFieldEnumSchema = z.enum(['id','title','mainParagraph','image','createdAt','updatedAt']);

export default ArticleScalarFieldEnumSchema;
