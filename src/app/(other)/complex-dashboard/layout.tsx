export default function ComplexDashboardLayout({
  children,
  users,
  notionfication,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notionfication: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogin = true;

  return isLogin ? (
    <div>
      <div>{children}</div>
      <div>{users}</div>
      <div>{notionfication}</div>
    </div>
  ) : (
    <div>{login}</div>
  );
}
