import type {NextPage} from 'next'
import {signIn} from "next-auth/react";
import {useState} from "react";
import {useRouter} from 'next/router';

const Authentication: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<boolean>(false);

  const handleSignIn: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError(false)

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setLoginError(false)
    } else {
      router.push('/')
    }
  };

  return (
    <div>
      <h1>Authentication</h1>
      <form onSubmit={handleSignIn}>
        {loginError && <p style={{color: 'red'}}>Not Authorized</p>}
        <div className="mb-4">
          <label
            htmlFor="email"
          >
            Email
            <input
              name="email"
              type="text"
              onChange={event => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
          >
            password
            <input
              name="password"
              type="password"
              onChange={event => setPassword(event.target.value)}
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Authentication;
