import { redirect } from "next/navigation";

export type Props = {
  params: Promise<{ productId: string }>;
};

// 动态元数据
export async function generateMetadata({ params }: Props) {
  const { productId } = await params;
  return {
    title: `产品详情页：iphone ${productId}`,
  };
}

export default async function ProductDetail({ params }: Props) {
  const { productId } = await params;
  if (parseInt(productId) > 100) {
    redirect("/product");
  }
  return <h1>产品详情页：{productId}</h1>;
}
