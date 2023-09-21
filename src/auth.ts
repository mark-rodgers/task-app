import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/db";

import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // TODO: store session in postgres. until then we need to force consent
      // on every login to get a refresh token
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // })
  ],
  // pages: {
  //   signIn: "/auth/login",
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  // adapter: PrismaAdapter(prisma),
};
