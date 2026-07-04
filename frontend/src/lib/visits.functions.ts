// Client-side mock for visit statistics
export async function recordVisit(data: { sessionId: string }) {
  try {
    const key = "ca_visit_total";
    const total = localStorage.getItem(key);
    // Baseline total is 142
    const currentTotal = total ? parseInt(total, 10) : 142;
    // We only increment if this session hasn't been counted in this pageload
    if (!sessionStorage.getItem("ca_visit_counted")) {
      const newTotal = currentTotal + 1;
      localStorage.setItem(key, newTotal.toString());
      sessionStorage.setItem("ca_visit_counted", "true");
    }
  } catch (error) {
    console.error("recordVisit mock error:", error);
  }
  return { ok: true };
}

export async function getVisitStats() {
  try {
    const key = "ca_visit_total";
    const storedTotal = localStorage.getItem(key);
    const total = storedTotal ? parseInt(storedTotal, 10) : 143;

    // Simulate active live visitors between 2 and 6
    const hour = new Date().getHours();
    let baseLive = 3;
    if (hour >= 9 && hour <= 17) {
      baseLive = 5; // higher activity during business hours
    }
    const randomOffset = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
    const live = Math.max(1, baseLive + randomOffset);

    return { total, live };
  } catch (error) {
    console.error("getVisitStats mock error:", error);
    return { total: 143, live: 3 };
  }
}

export async function removeVisit(data: { sessionId: string }) {
  return { ok: true };
}
