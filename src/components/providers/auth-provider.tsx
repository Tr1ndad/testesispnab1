'use client';

import { AuthProvider } from "@/hooks/useAuthMock";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProviderWrapper({ children }: AuthProviderProps) {
  return <AuthProvider>{children}</AuthProvider>;
}