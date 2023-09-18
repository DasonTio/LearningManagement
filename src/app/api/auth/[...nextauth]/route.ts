import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { BuiltInProviderType } from "next-auth/providers/index";

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, account, credentials, email, profile }) {
      const provider = account?.provider as BuiltInProviderType | undefined;
      if (!email || !provider || !profile) return false;
      if (provider == "credentials") {
        console.log("Credentials---");
        console.log(credentials);
        const isVerified =
          credentials?.email.value?.includes("@student.pradita");
        return isVerified ? true : false;
      }
      return true;
    },
    async session({ session, token, user }) {
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return null;
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
