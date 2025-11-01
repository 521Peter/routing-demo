"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const pathArr = pathname.split("/");

  return (
    <h1>
      review {pathArr[4]} not found for product {pathArr[2]}
    </h1>
  );
}
