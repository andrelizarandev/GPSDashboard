// Modules
import { useMutation } from 'react-query';

// Api
import { postDriverApi, putToggleDriverStatus } from '../../api/drivers'

export default function useDriverQueries () {
  
  function usePostDriver (onSuccess: () => void) {
    return useMutation(postDriverApi, { onSuccess });
  }

  function usePutToggleDriverStatus (onSuccess: () => void) {
    return useMutation(putToggleDriverStatus, { onSuccess })
  }

  return {
    usePostDriver,
    usePutToggleDriverStatus
  }

}
