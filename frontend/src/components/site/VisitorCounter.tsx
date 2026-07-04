import { useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Activity, Users } from "lucide-react";
import { getVisitStats, recordVisit, removeVisit } from "@/lib/visits.functions";

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  const key = "ca_session_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export function VisitorCounter() {
  const mutation = useMutation({
    mutationFn: (sessionId: string) => recordVisit({ sessionId }),
  });

  const { data } = useQuery({
    queryKey: ["visit-stats"],
    queryFn: () => getVisitStats(),
    refetchInterval: 15000,
  });

  useEffect(() => {
    const id = getOrCreateSessionId();
    if (!id) return;
    mutation.mutate(id);
    const ping = setInterval(() => mutation.mutate(id), 60000);

    const handleUnload = () => {
      removeVisit({ sessionId: id });
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      clearInterval(ping);
      window.removeEventListener("beforeunload", handleUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pointer-events-auto rounded-2xl border border-cream/20 bg-teal/70 px-5 py-4 backdrop-blur-md shadow-2xl min-w-[220px]">
      <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-aqua/90">
        Live Site Activity
      </div>
      <div className="mt-3 grid grid-cols-2 gap-5">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="h-2 w-2 rounded-full bg-aqua animate-pulse" />
            <span className="font-display text-3xl text-cream tabular-nums">
              {data?.live ?? "—"}
            </span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-cream/70">
            <Activity className="h-3 w-3" /> Live now
          </div>
        </div>
        <div>
          <span className="font-display text-3xl text-cream tabular-nums">
            {data?.total ?? "—"}
          </span>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-cream/70">
            <Users className="h-3 w-3" /> Total visits
          </div>
        </div>
      </div>
    </div>
  );
}
