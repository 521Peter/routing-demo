export default async function DocsDes({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <p>Here is the documentation for {slug && slug.join("/")}</p>
    </div>
  );
}
