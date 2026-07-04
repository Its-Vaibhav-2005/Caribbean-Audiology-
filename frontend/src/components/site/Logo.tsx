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
        className="h-24 w-28 md:h-28 md:w-28 object-contain shrink-0 transition-transform group-hover:scale-102"
        alt="Caribbean Audiology Logo"
      />
    </Link>
  );
}
