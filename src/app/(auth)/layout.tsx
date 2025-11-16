"use client";
import Link from "next/link";
import "./styles.css";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const links = [
    { name: "register", href: "/register" },
    { name: "login", href: "/login" },
    { name: "forget-password", href: "/forget-password" },
  ];
  return (
    <html lang="en">
      <body>{children}</body>
      {links.map((it) => {
        return (
          <Link
            key={it.href}
            href={it.href}
            style={it.href === pathname ? { color: "pink" } : {}}
          >
            <h1>{it.name}</h1>
          </Link>
        );
      })}
    </html>
  );
}
