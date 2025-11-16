import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "博客页面",
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return <h1>博客页面</h1>;
}
