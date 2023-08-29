// Paulo Castelli//
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Login clicked');
  };

  const handleRegister = () => {
    // Lógica de cadastro aqui
    console.log('Register clicked');
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Nome de Usuário:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogin}>Entrar</button>
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
};

export default Login;
