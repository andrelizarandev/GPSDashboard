// Queries
import { useNavigate } from 'react-router-dom';

// Hooks
import useValues from './values';

// Queries
import { useLoginQueries } from '../../../queries/use-login-queries';

export default function useSubmit () {
  
  const navigate = useNavigate();
  const { usePostLogin } = useLoginQueries();

  const {
    getPostLoginValues
  } = useValues();

  const { 
    isLoading:isLoadingPostLogin,
    mutate:mutatePostLogin 
  } = usePostLogin(onSuccessPostLogin);

  function startPostLogin (e:any) {
    e.preventDefault();
    mutatePostLogin(getPostLoginValues());
  }

  function onSuccessPostLogin (data:string) {
    localStorage.setItem('gps-token', data);
    navigate('/home');
  }

  return {
    startPostLogin,
    isLoadingPostLogin
  }
  
}
