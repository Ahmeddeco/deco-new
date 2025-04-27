import { z } from 'zod';

export const SubtitleScalarFieldEnumSchema = z.enum(['id','title','paragraph','image','articleId']);

export default SubtitleScalarFieldEnumSchema;
