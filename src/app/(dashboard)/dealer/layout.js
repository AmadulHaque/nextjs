import ProtectedRoute from "@/app/components/common/ProtectedRoute";
import MainLayout from "@/app/components/Layout/MainLayout";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <ProtectedRoute>
        <MainLayout>{children}</MainLayout>
      </ProtectedRoute>
    </>
  );
}
