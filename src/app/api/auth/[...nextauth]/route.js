import clientPromise from "@/libs/mongoConnect";
import * as mongoose from "mongoose";
import {User} from '@/app/models/User';
import NextAuth, {getServerSession} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, user, token }){
        // Assign the userid and role from the jwt callback below
        if(session?.user) { session.user.id = token.uid; session.user.role=token.roleid }
        return session
    },
    async jwt({ token, user }){
        if(user) { token.uid = user.id; token.roleid=user.role  }
        return token;
    },
},
session:{ strategy:'jwt' },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({email});
        // const passwordOk = user && bcrypt.compareSync(password, user.password);
         const passwordOk = user && (password== user.password);

       console.log(password,user.password)
        if (passwordOk) {
          console.log(user)
          return user;
        }

        return null
      }
    })
  ],
};



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }