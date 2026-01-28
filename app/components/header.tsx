import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header>
      <nav className="flex justify-between @container">
        <Link href="/">
          🐼 <span className="hidden @xs:inline">Stash Panda Tag</span>
        </Link>
        <ul className="@xs:flex">
          <li>
            <Link href="/auto-generate">Auto-Generate</Link>
          </li>
          <li>
            <Link href="/reprint">Reprint</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
