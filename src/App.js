import React from 'react';
import './App.css';
import ApollocClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonsContainer } from './containers/PokemonsContainer'

function App() {
  const client = new ApollocClient({
    uri: 'https://graphql-pokemon.now.sh'
  })
  return (
    <ApolloProvider client={client}>
    <main className="App">
      <PokemonsContainer />
    </main>
    </ApolloProvider>
  );
}

export default App;
