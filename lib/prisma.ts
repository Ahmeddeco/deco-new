import { PrismaClient } from '@/lib/generated/prisma'
export const runtime = 'nodejs'

export const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB