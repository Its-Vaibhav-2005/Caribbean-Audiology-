import { Pool } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn("DATABASE_URL is not set. Please configure it in your environment/env file.");
}

export const pool = new Pool({
  connectionString: databaseUrl,
});

let initialized = false;

export async function ensureTables() {
  if (initialized) return;
  try {
    const client = await pool.connect();
    try {
      // Create page_visits table if not exists
      await client.query(`
        CREATE TABLE IF NOT EXISTS page_visits (
          session_id TEXT PRIMARY KEY,
          first_seen TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          last_seen TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `);

      // Create appointments table if not exists
      await client.query(`
        CREATE TABLE IF NOT EXISTS appointments (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          phone TEXT NOT NULL,
          email TEXT NOT NULL,
          service TEXT NOT NULL,
          appointment_date DATE NOT NULL,
          notes TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `);
      initialized = true;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Failed to initialize database tables:", error);
  }
}
