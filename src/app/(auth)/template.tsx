"use client";
import Link from "next/link";
import "./styles.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <link rel="icon" href="https://i.imgur.com/4t7zZqk.png" />
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
    </>
  );
}
