import { useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Users } from "lucide-react";
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
    <div className="pointer-events-auto rounded-2xl border border-cream/20 bg-teal/70 px-5 py-3.5 backdrop-blur-md shadow-2xl min-w-[160px] text-center flex flex-col items-center">
      <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-aqua/90">
        Site Activity
      </div>
      <div className="mt-1.5 font-display text-3xl text-cream tabular-nums font-semibold">
        {data?.total ?? "—"}
      </div>
      <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-cream/70">
        <Users className="h-3.5 w-3.5" /> Total visits
      </div>
    </div>
  );
}
