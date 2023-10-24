import React, { useEffect, useState } from 'react';

interface User {
  name: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userItem = sessionStorage.getItem('user');
    setUser(userItem ? JSON.parse(userItem) : null);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Seja bem vindo {user?.name}</h2>
    </div>
  );
}

export default Dashboard;

