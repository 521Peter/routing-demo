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
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }
  return (
    <h1>
      review {reviewId} form product {productId}
    </h1>
  );
}
