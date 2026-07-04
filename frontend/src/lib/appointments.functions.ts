"use server";

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { pool, ensureTables } from "./db";

const appointmentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Service is required"),
  date: z.string().min(1, "Preferred date is required"),
  notes: z.string().optional(),
});

export const createAppointment = createServerFn({ method: "POST" })
  .validator((d: z.infer<typeof appointmentSchema>) => appointmentSchema.parse(d))
  .handler(async ({ data }) => {
    await ensureTables();
    try {
      await pool.query(
        `INSERT INTO appointments (name, phone, email, service, appointment_date, notes)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [data.name, data.phone, data.email, data.service, data.date, data.notes || null]
      );
      return { success: true };
    } catch (error) {
      console.error("createAppointment failed:", error);
      return { success: false, error: "Database error. Please try again." };
    }
  });
