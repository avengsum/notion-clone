import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'

if(!process.env.DATABASE_URL) {
  console.log("Cannot find the database url")
}

export default {
  schema: './src/lib/superbase/schema.ts',
  out:'./migration',
  driver:'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || '',
  },
} satisfies Config