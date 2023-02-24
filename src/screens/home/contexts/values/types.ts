// Types
import { LocationData } from "../../../../api/home/types";
import { OptionData } from "../../../../components/_selectors/simple-selector/types";

export type ValuesContextPayload = {
  userList: OptionData[];
  setUserList: React.Dispatch<React.SetStateAction<OptionData[]>>;
  locationList: LocationData[];
  setLocationList: React.Dispatch<React.SetStateAction<LocationData[]>>
}