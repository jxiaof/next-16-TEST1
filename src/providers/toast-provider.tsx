"use client";

import { ReactNode, createContext, useContext } from "react";
import { useToast } from "@hooks/use-toast";

const ToastContext = createContext<ReturnType<typeof useToast> | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const toast = useToast();

  return (
    <ToastContext.Provider value={toast}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within ToastProvider");
  }
  return context;
}