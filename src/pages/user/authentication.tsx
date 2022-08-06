import type {NextPage} from 'next'
import {signIn} from "next-auth/react";

const Authentication: NextPage = () => {

  const handleSignIn: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email: 'valentim_araujo@yahoo.com.br',
      password: 'password',
      callbackUrl: `${window.location.origin}`,
    });

    if (res) {
      if (res.error) {
        console.log(res.error);
      }
    }

    console.log('handleSignIn', res);
  };

  return (
    <div>
      <h1>Authentication</h1>
      <form onSubmit={handleSignIn}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-sm font-bold uppercase text-gray-600"
          >
            Email
            <input
              name="email"
              aria-label="enter your email"
              aria-required="true"
              type="text"
              className="mt-2 w-full bg-gray-300 p-3 text-gray-900"
            />
          </label>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="text-sm font-bold uppercase text-gray-600"
          >
            password
            <input
              name="password"
              aria-label="enter your password"
              aria-required="true"
              type="password"
              className="mt-2 w-full bg-gray-300 p-3 text-gray-900"
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Authentication
