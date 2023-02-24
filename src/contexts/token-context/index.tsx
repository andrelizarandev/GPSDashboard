// Modules
import { createContext, useState } from 'react';

// Types
import { TokenContextPayload } from './types';

export const TokenContext = createContext({} as TokenContextPayload);

export default function TokenContextContainer ({ children }:any) {

  const [ tokenInformation, setTokenInformation ] = useState<string | null>(null);
  const [ username, setUsername ] = useState<null | string>(null)

  function removeTokenInformation () {
    setTokenInformation(null);
    setUsername(null);
  }

  const payload:TokenContextPayload = {
    tokenInformation, 
    setTokenInformation,
    username, 
    setUsername,
    removeTokenInformation
  }

  return (
    <TokenContext.Provider value={payload}>
      {children}
    </TokenContext.Provider>
  )
  
}
