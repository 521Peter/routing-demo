import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <h1>product list</h1>
      <Link href={"/product/1"}>
        <h2>product1</h2>
      </Link>
      <Link href={"/product/2"}>
        <h2>product2</h2>
      </Link>
      <Link href={"/product/3"} replace>
        <h2>product3</h2>
      </Link>
    </>
  );
}
