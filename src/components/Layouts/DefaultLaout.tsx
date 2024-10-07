"use client";
import React from "react";
import Sidebar from "@/components/Layouts/Sidebar";
import Header from "@/components/Layouts/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="mx-auto max-w-screen-2xl p-5 md:p-5 2xl:p-5">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
