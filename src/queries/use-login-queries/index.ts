// Modules
import { useMutation } from "react-query";

// Api
import { postLoginApi } from "../../api/login";

export function useLoginQueries () {

  function usePostLogin (onSuccess: (data:string) => void) {
    return useMutation(postLoginApi, {
      onSuccess: ({ data }) => onSuccess(data.token)
    });
  }

  return {
    usePostLogin
  }

}