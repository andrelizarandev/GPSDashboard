// Modules
import { useNavigate } from 'react-router-dom';

export default function useFunctions () {
  
  const navigate = useNavigate();

  function logOut () {
    localStorage.removeItem('gps-token');
    navigate('/');
  }

  return {
    logOut
  }

}
