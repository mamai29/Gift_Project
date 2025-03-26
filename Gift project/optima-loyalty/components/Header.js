import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Optima Loyalty</div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/contact">Contact</Link>
        <div className="icons">
          <span>👤</span>
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </nav>
    </header>
  );
}