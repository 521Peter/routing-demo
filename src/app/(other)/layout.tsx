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
      <body>
        <header style={{ backgroundColor: "pink", padding: "1rem" }}>
          头部
        </header>
        {children}
        <footer style={{ backgroundColor: "orange", padding: "1rem" }}>
          尾部
        </footer>
      </body>
    </html>
  );
}
