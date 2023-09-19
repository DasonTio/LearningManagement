import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { BuiltInProviderType } from "next-auth/providers/index";

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, account, credentials, email, profile }) {
      const provider = account?.provider as BuiltInProviderType | undefined;
      if (provider == "credentials") {
        fetch(`${process.env.NEXTAPI_URL!}/api/login`, {});
        const isVerified = user.email?.includes("@student.pradita");
        return isVerified ? true : false;
      }
      if (!email || !provider || !profile) return false;
      return true;
    },
    async session({ session, token }) {
      session.user = {
        name: token.name,
        email: token.email,
      };
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        remember: { label: "Remember", type: "checkbox" },
      },
      async authorize(credentials, req) {
        return {
          id: "1",
          email: credentials?.email,
          password: credentials?.password,
          remember: credentials?.remember,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
