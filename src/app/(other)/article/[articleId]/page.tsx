import Link from "next/link";

export default async function ArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: string }>;
}) {
  const { articleId } = await params;
  const { lang } = await searchParams;
  return (
    <div>
      <Link href="/article/2?lang=fr">franch</Link>
      <Link href="/article/3?lang=zh">china</Link>
      <Link href="/article/4?lang=en">english</Link>
      <h1>Article Page</h1>
      <p>Article ID: {articleId}</p>
      <p>Search Query: {lang}</p>
    </div>
  );
}
