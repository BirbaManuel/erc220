import React from 'react';
import { Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from '@drizzle/react-plugin';

import DrizzleOptions from './DrizzleOptions';
import LoadingContainer from './LoadingContainer';
import TokenMetaData from './TokenMetaData'
import TokenWallet from './TokenWallet'

const drizzle = new Drizzle(DrizzleOptions);
const {DrizzleProvider} = drizzleReactHooks;

function App() {
  return (
    <div className="container">
      <h1>MIKUTANO Token</h1>
      <DrizzleProvider drizzle={drizzle}>
        <LoadingContainer>
          <TokenMetaData />
          <TokenWallet />
        </LoadingContainer>
      </DrizzleProvider>
    </div>
  );
}

export default App;
