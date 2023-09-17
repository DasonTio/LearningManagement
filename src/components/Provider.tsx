"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { useEmotionCache, MantineProvider } from "@mantine/core";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";

interface Props {
  children: ReactNode;
}

export const Provider = (props: Props) => {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <SessionProvider>{props.children}</SessionProvider>
      </MantineProvider>
    </CacheProvider>
  );
};
