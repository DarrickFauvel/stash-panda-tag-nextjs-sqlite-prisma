import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header>
      <nav className="navbar bg-base-100 shadow-sm px-4">
        <div className="navbar-start">
          <Link href="/" className="text-lg font-semibold">
            🐼 <span className="hidden sm:inline">Stash Panda Tag</span>
          </Link>
        </div>
        <div className="navbar-center">
          <span className="badge badge-success gap-1">🖨️ DYMO Ready</span>
        </div>
        <div className="navbar-end">
          <Link href="/settings" className="btn btn-ghost btn-sm hidden sm:flex">
            ⚙️ Settings
          </Link>
        </div>
      </nav>
    </header>
  );
}
