// @ts-nocheck
/* eslint-disable */
let PrismaClient: any
let PrismaPg: any

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  PrismaClient = require('./generated/prisma/client').PrismaClient
} catch {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    PrismaClient = require('@prisma/client').PrismaClient
  } catch {
    PrismaClient = class MockPrismaClient {}
  }
}

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  PrismaPg = require('@prisma/adapter-pg').PrismaPg
} catch {
  PrismaPg = class MockPrismaPg {}
}

const globalForPrisma = globalThis as unknown as {
  prisma: any
}

export const prisma =
  globalForPrisma.prisma ??
  (PrismaClient
    ? new PrismaClient({
        adapter:
          process.env.DATABASE_URL && PrismaPg
            ? new PrismaPg({ connectionString: process.env.DATABASE_URL })
            : undefined,
      })
    : {})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
