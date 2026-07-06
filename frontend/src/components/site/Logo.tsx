import { Link } from "@tanstack/react-router";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const logoSrc = variant === "light" ? "/icon2.svg" : "/icon.svg";
  return (
    <Link
      to="/"
      className="flex items-center group shrink-0"
      aria-label="Caribbean Audiology - Go to Home"
    >
      <img
        src={logoSrc}
        className="h-22 w-45 md:h-32 md:w-50 object-contain shrink-0 transition-transform group-hover:scale-102"
        alt="Caribbean Audiology Logo"
      />
    </Link>
  );
}
