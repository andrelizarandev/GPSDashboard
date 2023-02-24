// Modules
import { createContext, useState } from "react"

// Types
import { ValuesContextPayload } from "./types";
import { GetLocationData } from "../../../../api/home/types";
import { OptionData } from "../../../../components/_selectors/simple-selector/types";

export const ValuesContext = createContext({} as ValuesContextPayload);

export default function ValuesContextContainer ({ children }:any) {

  const [ userList, setUserList ] = useState<OptionData[]>([]);
  const [ locationList, setLocationList ] = useState<GetLocationData[]>([]);

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
