import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const nextAuthOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});
export { nextAuthOptions as GET, nextAuthOptions as POST };
// export default NextAuth(authOptions);

//       clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_SECRET,
