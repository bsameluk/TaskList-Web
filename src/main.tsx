import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import client from "./apollo.ts";

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
