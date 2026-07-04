"use server";

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { pool, ensureTables } from "./db";

export const recordVisit = createServerFn({ method: "POST" })
  .validator((d: { sessionId: string }) => z.object({ sessionId: z.string().min(8).max(64) }).parse(d))
  .handler(async ({ data }) => {
    await ensureTables();
    try {
      await pool.query(
        `INSERT INTO page_visits (session_id, last_seen)
         VALUES ($1, NOW())
         ON CONFLICT (session_id)
         DO UPDATE SET last_seen = NOW()`,
        [data.sessionId]
      );
    } catch (error) {
      console.error("recordVisit failed:", error);
    }
    return { ok: true };
  });

export const getVisitStats = createServerFn({ method: "GET" }).handler(async () => {
  await ensureTables();
  try {
    const twoMinAgo = new Date(Date.now() - 2 * 60 * 1000);
    const [totalRes, liveRes] = await Promise.all([
      pool.query("SELECT COUNT(*) FROM page_visits"),
      pool.query("SELECT COUNT(*) FROM page_visits WHERE last_seen >= $1", [twoMinAgo]),
    ]);
    const total = parseInt(totalRes.rows[0].count, 10);
    const live = parseInt(liveRes.rows[0].count, 10);
    return { total: isNaN(total) ? 0 : total, live: isNaN(live) ? 0 : live };
  } catch (error) {
    console.error("getVisitStats failed:", error);
    return { total: 0, live: 0 };
  }
});

export const removeVisit = createServerFn({ method: "POST" })
  .validator((d: { sessionId: string }) => z.object({ sessionId: z.string().min(8).max(64) }).parse(d))
  .handler(async ({ data }) => {
    await ensureTables();
    try {
      await pool.query("DELETE FROM page_visits WHERE session_id = $1", [data.sessionId]);
    } catch (error) {
      console.error("removeVisit failed:", error);
    }
    return { ok: true };
  });
