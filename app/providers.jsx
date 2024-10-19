"use client";


import store from '../store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from "react-redux";


export function Providers({ children }) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
