import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';

const App: React.FC = () => {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
      <Router />
    </QueryClientProvider>
  );
}

export default App;
