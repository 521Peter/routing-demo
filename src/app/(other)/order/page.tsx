"use client";
import { useRouter } from "next/navigation";

export default function Order() {
  const router = useRouter();
  return (
    <>
      <h1>订单页</h1>
      <button onClick={() => router.push("/")}>确定</button>
    </>
  );
}
