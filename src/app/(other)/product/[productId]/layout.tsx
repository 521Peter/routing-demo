export default function DetailProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (Math.random() > 0.5) {
    throw new Error("出错了");
  }
  return (
    <div>
      <h1>详情产品页布局</h1>
      {children}
    </div>
  );
}
