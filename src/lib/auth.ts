import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

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

        // Simulação de usuário - em um app real, você buscaria no banco de dados
        const user = {
          id: "1",
          email: credentials.email as string,
          name: "João Almeida",
          tipo: "proponente",
          municipio: { id: "1", nome: "Pinhais" }
        };

        if (!user) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.senha as string,
          "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi" // senha123
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
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