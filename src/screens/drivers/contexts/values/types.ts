// Types
import { GetUserData } from "../../../../api/home/types";

export type ValuesContextPayload = {
  userList: GetUserData[];
  setUserList: React.Dispatch<React.SetStateAction<GetUserData[]>>;
  selectedUser: string | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<string | null>>;
}