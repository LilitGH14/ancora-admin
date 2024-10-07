"use client";
import React from "react";
import Signin from "@/components/Auth";
import { useSelector } from "react-redux";
import ProductPage from "./pens/page";

export default function Home() {
  const user = useSelector((store: any) => store.auth.user);

  if (!user) return <Signin />;

  return <ProductPage />;
}
