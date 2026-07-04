import { QueryClient } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-teal">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-teal-mid"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-teal">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can try again or head home.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-cream hover:bg-teal-mid"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-teal px-5 py-2.5 text-sm font-medium text-teal hover:bg-teal/5"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return <Outlet />;
}
