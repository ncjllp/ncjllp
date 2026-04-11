"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        width: "100%",
        padding: scrolled ? "16px 40px" : "24px 40px",
        background: "linear-gradient(135deg, #49330c 50%, #1a160e 100%))",
        backdropFilter: "blur(12px)",
        borderBottom: "3px solid rgba(6, 6, 6, 0.2)",
        position: "fixed",
        top: 0,
        left: 0,
        transition: "all 0.3s ease",
        zIndex: 10000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 600,
            fontSize: "30px",
            textDecoration: "none",
            background: "linear-gradient(90deg, #d4af37, #f5e6a5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            
          }}
        >
          NJC LEGAL LLP
        </Link>

        <nav
          style={{
            display: "flex",
            gap: "8px",
            background: "#0d0d0d",
            padding: "6px",
            borderRadius: "999px",
            boxShadow: "inset 0 0 10px rgba(255,255,255,0.05)",
            border: "1px solid rgba(212,175,55,0.2)",
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  color: isActive ? "#d4af37" : "#aaa",
                  background: isActive ? "#1a1a1a" : "transparent",
                  boxShadow: isActive
                    ? "inset 0 2px 4px rgba(255,255,255,0.4), 0 4px 8px rgba(0,0,0,0.6)"
                    : "none",
                  transition: "all 0.3s ease",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {user ? (
            <>
              <span
                style={{
                  color: "#d4af37",
                  fontSize: "13px",
                  whiteSpace: "nowrap",
                }}
              >
                Hi, {user.name}
              </span>
              <button
                type="button"
                onClick={logout}
                style={{
                  padding: "10px 16px",
                  borderRadius: "999px",
                  border: "1px solid rgba(212,175,55,0.35)",
                  background: "transparent",
                  color: "#d4af37",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/auth"
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                border: "1px solid #d4af37",
                color: "#d4af37",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Login / Sign Up
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}