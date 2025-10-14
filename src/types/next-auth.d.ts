import NextAuth from "next-auth";
import { Municipio } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      tipo: string;
      municipio: Municipio | null;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    tipo: string;
    municipio: Municipio | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    tipo: string;
    municipio: Municipio | null;
  }
}