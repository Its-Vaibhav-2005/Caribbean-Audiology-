import { Link } from "@tanstack/react-router";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const logoSrc = variant === "light" ? "/icon2.svg" : "/icon.svg";
  return (
    <Link to="/" className="flex items-center group" aria-label="Caribbean Audiology - Go to Home">
      <img
        src={logoSrc}
        className="h-18 md:h-24 w-auto object-contain transition-transform group-hover:scale-102"
        alt="Caribbean Audiology Logo"
      />
    </Link>
  );
}
