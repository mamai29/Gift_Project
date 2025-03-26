"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Use this to get the current path
import "./Header.css";

export default function Header() {
  const pathname = usePathname(); // Get the current pathname

  return (
    <header className="header">
      <div className="logo">Optima Loyalty</div>
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <div className="icons">
          <span>👤</span>
          <span>🔍</span>
          <span>🛒</span>
        </div>
        {/* Conditionally render Points Balance only on homepage */}
        {pathname === "/home" && (
          <div className="points-balance">
            <span>Points Balance</span>
            <div className="points-amount">2,500</div>
          </div>
        )}
      </nav>
    </header>
  );
}
