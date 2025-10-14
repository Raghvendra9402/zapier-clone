import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Home() {
  const queyClient = getQueryClient();
  void queyClient.prefetchQuery(trpc.getUsers.queryOptions());
  return (
    <HydrationBoundary state={dehydrate(queyClient)}>
      <div>hello</div>
      <Suspense fallback={<p>loading...</p>}></Suspense>
    </HydrationBoundary>
  );
}
