import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Service is required"),
  date: z.string().min(1, "Preferred date is required"),
  notes: z.string().optional(),
});

export type AppointmentData = z.infer<typeof appointmentSchema>;

export async function createAppointment(data: AppointmentData) {
  // Validate data
  appointmentSchema.parse(data);

  // Simulate server latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  try {
    // Save to localStorage to persist client-side
    const key = "ca_appointments";
    const existing = localStorage.getItem(key);
    const list = existing ? JSON.parse(existing) : [];
    list.push({
      ...data,
      id: Date.now(),
      created_at: new Date().toISOString(),
    });
    localStorage.setItem(key, JSON.stringify(list));
    return { success: true };
  } catch (error) {
    console.error("createAppointment mock failed:", error);
    return { success: false, error: "Failed to request appointment. Please try again." };
  }
}
