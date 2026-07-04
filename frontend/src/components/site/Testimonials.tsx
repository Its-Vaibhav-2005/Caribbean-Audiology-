import { MessageSquare, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role?: string;
  quote: string;
  tags?: string[];
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maria R.",
    quote: "I was nervous about getting my first hearing aid, but the team made the process so easy. They explained everything clearly and treated me with such kindness. Now I can enjoy conversations with my grandchildren again.",
    tags: ["Hearing Aids", "Patient Care"]
  },
  {
    name: "David P.",
    quote: "The clinic staff were professional and attentive. My hearing test was thorough, and the audiologist helped me choose the right device for my lifestyle. I feel more confident at work and in social settings.",
    tags: ["Hearing Test", "Lifestyle Fitting"]
  },
  {
    name: "Sarah L.",
    quote: "I had been struggling with tinnitus for years. The clinic provided not only treatment options but also patient education that gave me hope. Their support has truly improved my quality of life.",
    tags: ["Tinnitus Management", "Education"]
  },
  {
    name: "John K.",
    quote: "From the moment I walked in, I felt cared for. The follow-up appointments ensured my hearing aid was perfectly adjusted. I can finally hear music the way I used to.",
    tags: ["Follow-up Care", "Custom Adjustment"]
  },
  {
    name: "Anita S.",
    quote: "The constant noise was overwhelming, but the team treated me with patience and empathy. Their combination of sound therapy and lifestyle advice has given me real relief.",
    tags: ["Tinnitus Care", "Sound Therapy"]
  },
  {
    name: "Saumya L.",
    quote: "I lived with constant ringing in my ears for years. The clinic gave me hope by explaining my options clearly and guiding me through sound therapy. Today, I sleep better and feel more in control of my life.",
    tags: ["Sound Therapy", "Tinnitus Recovery"]
  },
  {
    name: "Hospadles P.",
    quote: "The tinnitus was affecting my focus at work. The audiologist not only adjusted my hearing aids but also taught me coping strategies. Their support has made a huge difference in my productivity and peace of mind.",
    tags: ["Productivity", "Coping Strategies"]
  },
  {
    name: "Kathrine R.",
    quote: "I thought I had to just 'live with it,' but the clinic showed me that tinnitus can be managed. The counselling sessions helped me reduce my stress, and now the buzzing doesn't dominate my day anymore.",
    tags: ["Counselling", "Stress Reduction"]
  }
];

export function Testimonials() {
  // Split into two sets for double-row marquee effect
  const row1 = TESTIMONIALS.slice(0, 4);
  const row2 = TESTIMONIALS.slice(4);

  // Helper component for a single testimonial card
  const TestimonialCard = ({ t }: { t: Testimonial }) => (
    <div className="w-[350px] sm:w-[450px] shrink-0 relative flex flex-col justify-between rounded-2xl bg-card border border-border/60 p-6 sm:p-8 hover:border-teal/30 hover:shadow-lg transition-all duration-300 mx-3">
      <div className="absolute top-6 right-6 text-teal/10">
        <Quote className="h-10 w-10 stroke-[3]" />
      </div>
      <div className="relative z-10 flex-1">
        <p className="text-foreground/80 text-[14px] sm:text-[15px] leading-relaxed italic">
          "{t.quote}"
        </p>
      </div>
      <div className="mt-6 pt-5 border-t border-border/40 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-teal text-cream font-display text-sm font-bold flex items-center justify-center">
            {t.name[0]}
          </div>
          <div>
            <h4 className="font-sans font-semibold text-sm text-teal">{t.name}</h4>
            <p className="text-[11px] text-muted-foreground">Verified Patient</p>
          </div>
        </div>
        {t.tags && t.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-sand/30 text-teal text-[10px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-sand/20 border-t border-border/40 overflow-hidden relative">
      {/* CSS Injection for Seamless Loop Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-ltr {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
        @keyframes marquee-rtl {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          animation: marquee-ltr 50s linear infinite;
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: marquee-rtl 50s linear infinite;
        }
        .animate-marquee-ltr:hover,
        .animate-marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold tracking-wider uppercase mb-3">
          <MessageSquare className="h-3.5 w-3.5" />
          What Our Patients Say
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-teal">
          Patient Stories & Testimonials
        </h2>
        <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Real feedback from individuals who have rediscovered the joy of hearing and reclaimed their quality of life. Hover to pause.
        </p>
      </div>

      <div className="space-y-6 select-none relative w-full">
        {/* Row 1: Left to Right (LTR) */}
        <div className="flex w-full overflow-hidden mask-gradient">
          <div className="animate-marquee-ltr">
            {/* Render items twice for infinite scroll effect */}
            {[...row1, ...row1, ...row1, ...row1].map((t, idx) => (
              <TestimonialCard key={`row1-${idx}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left (RTL) */}
        <div className="flex w-full overflow-hidden mask-gradient">
          <div className="animate-marquee-rtl">
            {/* Render items twice for infinite scroll effect */}
            {[...row2, ...row2, ...row2, ...row2].map((t, idx) => (
              <TestimonialCard key={`row2-${idx}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
