
import { PrismaClient } from '../lib/generated/prisma'

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], 
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
