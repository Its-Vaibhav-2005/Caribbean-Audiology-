import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

// A small component for pulsing block
function SkeletonBlock({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-2xl bg-teal/10 ${className}`} />;
}

export function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-background pt-28 md:pt-32">
      <Navbar overlay />

      {/* Hero Carousel Skeleton */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-4">
        <div className="relative h-[480px] w-full overflow-hidden rounded-3xl bg-teal/5 animate-pulse flex items-center p-8 sm:p-16">
          <div className="max-w-2xl space-y-4">
            <div className="h-4 w-28 bg-teal/20 rounded-full" />
            <div className="h-12 w-3/4 bg-teal/20 rounded-lg" />
            <div className="h-6 w-1/2 bg-teal/20 rounded-md" />
            <div className="h-12 w-40 bg-teal/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Intro Section Skeleton */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-14 md:grid-cols-[1.1fr_1fr] items-start">
          <div className="space-y-4">
            <div className="h-3 w-20 bg-teal/20 rounded-full" />
            <div className="h-10 w-full bg-teal/20 rounded-lg" />
            <div className="h-10 w-4/5 bg-teal/20 rounded-lg" />
          </div>
          <div className="space-y-4">
            <div className="h-4 w-full bg-teal/10 rounded" />
            <div className="h-4 w-full bg-teal/10 rounded" />
            <div className="h-4 w-5/6 bg-teal/10 rounded" />
            <div className="h-4 w-3/4 bg-teal/10 rounded" />
          </div>
        </div>
      </section>

      {/* Services Grid Skeleton */}
      <section className="py-20 bg-sand/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl space-y-4 mb-14">
            <div className="h-3 w-16 bg-teal/20 rounded-full" />
            <div className="h-10 w-3/4 bg-teal/20 rounded-lg" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-card p-8 border border-border/60 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-teal/10 animate-pulse" />
                <div className="h-6 w-1/2 bg-teal/20 rounded-md animate-pulse" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-teal/10 rounded animate-pulse" />
                  <div className="h-3 w-5/6 bg-teal/10 rounded animate-pulse" />
                </div>
                <div className="h-4 w-24 bg-teal/20 rounded-md animate-pulse pt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Page Header Skeleton */}
      <div className="bg-teal text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-4">
          <div className="h-4 w-20 bg-cream/25 rounded-full animate-pulse" />
          <div className="h-12 w-3/4 bg-cream/20 rounded-lg animate-pulse" />
          <div className="h-6 w-1/2 bg-cream/15 rounded-md animate-pulse" />
        </div>
      </div>
      {/* Prose Skeleton */}
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 space-y-8">
        <div className="space-y-3">
          <div className="h-6 w-1/3 bg-teal/20 rounded animate-pulse" />
          <div className="h-4 w-full bg-teal/10 rounded animate-pulse" />
          <div className="h-4 w-full bg-teal/10 rounded animate-pulse" />
          <div className="h-4 w-4/5 bg-teal/10 rounded animate-pulse" />
        </div>
        <div className="space-y-3">
          <div className="h-6 w-1/4 bg-teal/20 rounded animate-pulse" />
          <div className="h-4 w-full bg-teal/10 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-teal/10 rounded animate-pulse" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function AppointmentsSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Header */}
      <div className="bg-teal text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-4">
          <div className="h-4 w-24 bg-cream/25 rounded-full animate-pulse" />
          <div className="h-12 w-2/3 bg-cream/20 rounded-lg animate-pulse" />
          <div className="h-6 w-1/2 bg-cream/15 rounded-md animate-pulse" />
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Left Column Form Skeleton */}
          <div className="rounded-2xl bg-card border border-border p-8 sm:p-10 space-y-6">
            <div className="h-7 w-1/3 bg-teal/20 rounded-md animate-pulse" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="h-3 w-16 bg-teal/10 rounded" />
                <div className="h-10 bg-teal/5 rounded-lg animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-16 bg-teal/10 rounded" />
                <div className="h-10 bg-teal/5 rounded-lg animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-24 bg-teal/10 rounded" />
              <div className="h-10 bg-teal/5 rounded-lg animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-28 bg-teal/10 rounded" />
              <div className="h-32 bg-teal/5 rounded-lg animate-pulse" />
            </div>
            <div className="h-12 w-44 bg-teal/20 rounded-full animate-pulse" />
          </div>

          {/* Right Column Info Skeleton */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-teal/5 border border-teal/10 p-8 space-y-4">
              <div className="h-6 w-1/2 bg-teal/20 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-teal/10 rounded" />
                <div className="h-4 w-full bg-teal/10 rounded" />
                <div className="h-4 w-4/5 bg-teal/10 rounded" />
              </div>
            </div>
            <div className="rounded-2xl border border-border p-8 space-y-4">
              <div className="h-6 w-1/3 bg-teal/20 rounded animate-pulse" />
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 bg-teal/15 rounded-full" />
                <div className="space-y-1 w-1/2">
                  <div className="h-4 bg-teal/10 rounded" />
                  <div className="h-3 bg-teal/10 rounded w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export function ContactSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-teal text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-4">
          <div className="h-4 w-20 bg-cream/25 rounded-full animate-pulse" />
          <div className="h-12 w-2/3 bg-cream/20 rounded-lg animate-pulse" />
          <div className="h-6 w-1/2 bg-cream/15 rounded-md animate-pulse" />
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-8 md:grid-cols-2">
          {/* Details Skeleton */}
          <div className="rounded-2xl bg-card border border-border p-8 space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-teal/10 animate-pulse" />
                <div className="space-y-2 w-3/4">
                  <div className="h-3 w-16 bg-teal/20 rounded" />
                  <div className="h-4 w-full bg-teal/10 rounded" />
                </div>
              </div>
            ))}
          </div>
          {/* Map Placeholder Skeleton */}
          <div className="rounded-2xl bg-teal/5 border border-border shadow-sm min-h-[380px] animate-pulse" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export function ServicesIndexSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-teal text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-4">
          <div className="h-4 w-20 bg-cream/25 rounded-full animate-pulse" />
          <div className="h-12 w-2/3 bg-cream/20 rounded-lg animate-pulse" />
          <div className="h-6 w-1/2 bg-cream/15 rounded-md animate-pulse" />
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-6 md:grid-cols-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border/60 p-8 space-y-4">
              <div className="h-8 w-1/2 bg-teal/20 rounded-lg animate-pulse" />
              <div className="space-y-2 pt-2">
                <div className="h-4 w-3/4 bg-teal/10 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-teal/10 rounded animate-pulse" />
                <div className="h-4 w-4/5 bg-teal/10 rounded animate-pulse" />
              </div>
              <div className="h-4 w-24 bg-teal/20 rounded animate-pulse pt-2" />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function ServiceDetailSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-teal text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-4">
          <div className="h-4 w-16 bg-cream/25 rounded-full animate-pulse" />
          <div className="h-12 w-2/3 bg-cream/20 rounded-lg animate-pulse" />
          <div className="h-6 w-1/2 bg-cream/15 rounded-md animate-pulse" />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 space-y-8">
        <div className="space-y-3">
          <div className="h-6 w-1/3 bg-teal/20 rounded animate-pulse" />
          <div className="h-4 w-full bg-teal/10 rounded animate-pulse" />
          <div className="h-4 w-full bg-teal/10 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-teal/10 rounded animate-pulse" />
        </div>
        <div className="space-y-3">
          <div className="h-6 w-1/4 bg-teal/20 rounded animate-pulse" />
          <div className="h-4 w-full bg-teal/10 rounded animate-pulse" />
          <div className="h-4 w-full bg-teal/10 rounded animate-pulse" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function ResourcesIndexSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-teal text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-4">
          <div className="h-4 w-20 bg-cream/25 rounded-full animate-pulse" />
          <div className="h-12 w-2/3 bg-cream/20 rounded-lg animate-pulse" />
          <div className="h-6 w-1/2 bg-cream/15 rounded-md animate-pulse" />
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-5 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border/60 p-8 space-y-4">
              <div className="h-12 w-12 rounded-xl bg-teal/10 animate-pulse" />
              <div className="h-7 w-1/2 bg-teal/20 rounded-lg animate-pulse" />
              <div className="h-4 w-5/6 bg-teal/10 rounded animate-pulse" />
              <div className="h-4 w-24 bg-teal/20 rounded animate-pulse pt-2" />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function ResourceDetailSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-teal text-cream py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-4">
          <div className="h-4 w-24 bg-cream/25 rounded-full animate-pulse" />
          <div className="h-12 w-2/3 bg-cream/20 rounded-lg animate-pulse" />
          <div className="h-6 w-1/2 bg-cream/15 rounded-md animate-pulse" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 sm:px-8 py-16 space-y-8">
        <div className="h-8 w-1/3 bg-teal/20 rounded-lg animate-pulse" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-border p-6 space-y-2">
              <div className="h-5 w-1/2 bg-teal/20 rounded animate-pulse" />
              <div className="h-4 w-full bg-teal/10 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
