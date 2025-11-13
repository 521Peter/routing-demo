import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Other",
    template: "%s | hahaha",
  },
};

export default function OtherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header style={{ backgroundColor: "pink", padding: "1rem" }}>头部</header>
      <body>{children}</body>
      <footer style={{ backgroundColor: "orange", padding: "1rem" }}>
        尾部
      </footer>
    </html>
  );
}
