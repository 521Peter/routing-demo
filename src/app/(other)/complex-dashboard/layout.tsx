export default function ComplexDashboardLayout({
  children,
  users,
  notionfication,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notionfication: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div>{users}</div>
      <div>{notionfication}</div>
    </div>
  );
}
