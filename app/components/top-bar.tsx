import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header>
      <nav className="flex justify-between @container p-4">
        <Link href="/">
          🐼 <span className="hidden @3xs:inline">Stash Panda Tag</span>
        </Link>
        <span>🖨️ DYMO Ready</span>
        <Link href="/settings" className="hidden @sm:inline">
          ⚙️ Settings
        </Link>
      </nav>
    </header>
  );
}
