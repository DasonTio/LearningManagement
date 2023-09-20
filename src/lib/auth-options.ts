import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { BuiltInProviderType } from "next-auth/providers/index";
import prisma from "@/lib/db";
import { compareSync } from "bcrypt";

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, account, credentials, email, profile }) {
      const provider = account?.provider as BuiltInProviderType | undefined;

      if (provider == "credentials") {
        const emailUser = await prisma.user.findUnique({
          where: {
            email: user.email!,
          },
        });
        if (!emailUser) return false;
        const passwordAuthenticated = compareSync(
          credentials!["password"] as string,
          emailUser.password
        );
        return passwordAuthenticated;
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      const user = await prisma.user.findUnique({
        where: {
          email: token.email as string,
        },
      });

      session.user = {
        name: user!.name,
        email: user!.email,
      };
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "text" },
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
