import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'text',
          placeholder: 'johndoe@test.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: (credentials) => {
        // eslint-disable-next-line no-console
        console.log(credentials);
        return {
          id: 123,
          name: 'John',
          email: 'johndoe@test.com',
          access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTk3ODQ5NDksImV4cCI6MTY5MTMyMDk0OSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.Yq5x-9wzOcwe_aoeFEv0C95kBpBvLLwuFVCjFIfuKsU',
        };
      },
    }),
  ],
  secret: 'process.env.SECRET',
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: 'process.env.SECRET',
  },
  pages: {
    signIn: '/user/authentication',
    error: '/user/authentication',
    signOut: '/user/authentication',
  },
  callbacks: {
    async jwt({
      token, user, account, profile, isNewUser,
    }) {
      if (user) {
        // eslint-disable-next-line no-console
        console.log({
          token, user, account, profile, isNewUser,
        });
        // eslint-disable-next-line no-param-reassign
        token.accessToken = user.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // eslint-disable-next-line no-console
      console.log({ session, token, user });
      // eslint-disable-next-line no-param-reassign
      session.accessToken = token.accessToken;
      return session;
    },
  },
  events: {},
  debug: true,
});
