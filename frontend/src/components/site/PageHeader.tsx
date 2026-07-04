export function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-32 pb-14 bg-teal text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {kicker && (
          <div className="text-[11px] font-semibold tracking-[0.28em] uppercase text-aqua">
            {kicker}
          </div>
        )}
        <h1 className="mt-3 font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-cream/80 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 space-y-6 text-[17px] leading-relaxed text-foreground/85 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-2 [&_h2]:text-teal [&_h3]:font-display [&_h3]:text-2xl [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-teal [&_p]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-teal-mid [&_a]:underline">
      {children}
    </div>
  );
}
