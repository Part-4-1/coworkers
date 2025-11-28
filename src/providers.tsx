"use client";

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ChannelService from "./components/channel-talk";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

const QueryProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();
  const pathname = usePathname();

  useEffect(() => {
    ChannelService.loadScript();
  }, []);

  useEffect(() => {
    const isTasklistPage = pathname?.includes("/tasklist");

    ChannelService.boot({
      pluginKey: "4be26d42-5350-46c1-b390-93e0d142750e",
      hideChannelButtonOnBoot: isTasklistPage,
    });
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default QueryProviders;
