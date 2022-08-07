import { useState } from 'react';

import {
  Button, Container, FormContainer, InputContainer,
} from './style';

export interface ILogin {
  loginError: boolean;
  handlerAuthentication: ({ email, password }: { email: string, password: string }) => void
}

const Login = ({ handlerAuthentication, loginError }: ILogin) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlerLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlerAuthentication({ email, password });
  };

  return (
    <Container>
      <FormContainer onSubmit={handlerLogin}>
        <h1 className="mb-5 text-2xl font-semibold">Login</h1>
        {loginError && <p style={{ color: 'red' }}>Not Authorized</p>}
        <InputContainer>
          <label
            className="form-label"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="form-control"
            name="email"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label
            className="form-label"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            className="form-control"
            name="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </InputContainer>
        <div className="flex pt-5">
          <Button type="submit">Enviar</Button>
        </div>
      </FormContainer>
    </Container>
  );
};

export default Login;
