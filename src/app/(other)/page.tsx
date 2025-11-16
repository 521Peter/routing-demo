import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>welcome to my home</h1>
      <Link href="/blog">blog</Link>
      <Link href="/product">product</Link>
      <Link href="/article/1?lang=en">文章</Link>
    </>
  );
}
