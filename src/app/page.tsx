"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
// Use inter from next/font
import { Suspense } from "react";
import "@biconomy/web3-auth/dist/src/style.css";

// Dynamically import the `Wallet` component to make sure we don't get SSR errors
const Wallet = dynamic(
  () => import("../components/Wallet").then((res) => res.default),
  { ssr: false }
);


export default function Home() {
  return (
    <main >
      <Suspense fallback={<div>Loading...</div>}>
        <Wallet />
      </Suspense>
    </main>
  );
}
