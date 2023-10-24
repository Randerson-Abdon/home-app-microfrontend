import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Login = dynamic(() => import('login/login'), {
  ssr: false,  // Isso desativará a renderização do lado do servidor para o componente Login
  suspense: true, // Isso ativará o fallback de suspense
});

const Home: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState(null);

  const handleLoginSuccess = (user: any) => {
    console.log("Usuário autenticado no componente consumidor:", user);
    setAuthenticated(true);
    setData(user);
  };

  if (authenticated) {
    sessionStorage.setItem('user', JSON.stringify(data));
    window.location.href = '/dashboard';
  }

  return (
    <React.Suspense fallback="Carregando Login...">
      <Login onLoginSuccess={handleLoginSuccess} />
    </React.Suspense>
  );
};

export default Home;
