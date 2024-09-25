import Link from "next/link";

export default function PageHome() {
  return (
    <main>
      Home
      <div className="flex items-center gap-2">
        <Link
          className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          href="/test-page"
        >
          Test Page
        </Link>
        <Link
          className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          href="/test-page-2"
        >
          Test Page 2
        </Link>
      </div>
    </main>
  );
}