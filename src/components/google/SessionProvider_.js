"use client";
import { SessionProvider } from "next-auth/react";

export default function SessionProvider_({
  children,
  // pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
