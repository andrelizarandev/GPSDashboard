// Modules
import { createContext, useState } from "react"

// Types
import { ValuesContextPayload } from "./types";
import { LocationData } from "../../../../api/home/types";
import { OptionData } from "../../../../components/_selectors/simple-selector/types";

export const ValuesContext = createContext({} as ValuesContextPayload);

export default function ValuesContextContainer ({ children }:any) {

  const [ userList, setUserList ] = useState<OptionData[]>([]);
  const [ locationList, setLocationList ] = useState<LocationData[]>([]);

  const payload = {
    userList, 
    setUserList,
    locationList, 
    setLocationList
  };

  return (
    <ValuesContext.Provider value={payload}>
      {children}
    </ValuesContext.Provider>
  )
}
