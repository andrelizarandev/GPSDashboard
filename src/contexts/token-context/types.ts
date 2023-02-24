export type TokenContextPayload = {
  tokenInformation: string | null;
  setTokenInformation: React.Dispatch<React.SetStateAction<string | null>>;
  username: string | null;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
  removeTokenInformation: () => void;
}