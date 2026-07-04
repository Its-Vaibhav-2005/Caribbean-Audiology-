import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export function FloatingTrustButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const testimonialsEl = document.getElementById("testimonials");
      if (testimonialsEl) {
        const rect = testimonialsEl.getBoundingClientRect();
        // If the top of testimonials is visible or passed, hide the button
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-center gap-2 group animate-in fade-in duration-300">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes custom-bounce-down {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
        .animate-bounce-down {
          animation: custom-bounce-down 1.5s infinite;
        }
      `}} />
      
      <button
        onClick={handleClick}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-cream shadow-lg shadow-teal/20 transition-all duration-300 hover:bg-teal-mid hover:scale-110 active:scale-95 cursor-pointer animate-bounce-down"
        aria-label="Scroll to Testimonials"
      >
        <ArrowDown className="h-6 w-6 stroke-[2.5]" />
      </button>
      
      <button 
        onClick={handleClick}
        className="bg-card/90 backdrop-blur-sm border border-border px-3 py-1.5 rounded-lg shadow-sm text-[11px] font-semibold text-teal tracking-wide uppercase cursor-pointer hover:bg-teal hover:text-cream transition-colors duration-300 select-none text-center"
      >
        "Why to Trust?"
      </button>
    </div>
  );
}
