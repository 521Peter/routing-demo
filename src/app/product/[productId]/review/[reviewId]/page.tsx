import { notFound } from "next/navigation";

export default async function reviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <h1>
      review {reviewId} form product {productId}
    </h1>
  );
}
