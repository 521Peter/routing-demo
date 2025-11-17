"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    // 允许React在后台执行这些操作而不阻塞UI
    startTransition(() => {
      // 重新获取服务端组件的数据
      router.refresh();
      // 尝试重新渲染出错的组件
      reset();
    });
  };
  return (
    <>
      <h1>{error.message}</h1>
      <button onClick={reload}>retry again</button>
    </>
  );
}
