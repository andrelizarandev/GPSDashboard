// Modules
import { createContext, useState } from "react"

// Types
import { ValuesContextPayload } from "./types";
import { GetUserData } from "../../../../api/home/types";

export const ValuesContext = createContext({} as ValuesContextPayload);

export default function ValuesContextContainer ({ children }:any) {

  const [ userList, setUserList ] = useState<GetUserData[]>([]);
  const [ selectedUser, setSelectedUser ] = useState<string | null>(null);

  const payload = {
    userList, 
    setUserList,
    selectedUser, 
    setSelectedUser
  };

  return (
    <ValuesContext.Provider value={payload}>
      {children}
    </ValuesContext.Provider>
  )
}
