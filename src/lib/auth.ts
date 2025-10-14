import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        senha: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.senha) {
          return null;
        }

        const user = await prisma.usuario.findUnique({
          where: {
            email: credentials.email as string
          },
          include: {
            municipio: true
          }
        });

        if (!user || !user.ativo) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.senha as string,
          user.senha
        );

        if (!isPasswordValid) {
          return null;
        }

        // Atualizar último acesso
        await prisma.usuario.update({
          where: { id: user.id },
          data: { ultimo_acesso: new Date() }
        });

        return {
          id: user.id,
          email: user.email,
          name: user.nome,
          tipo: user.tipo,
          municipio: user.municipio
        };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.tipo = user.tipo;
        token.municipio = user.municipio;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.tipo = token.tipo as string;
        session.user.municipio = token.municipio;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
    signUp: "/cadastro"
  }
});