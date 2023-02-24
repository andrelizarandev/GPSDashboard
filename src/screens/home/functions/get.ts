// Moduless
import { useContext } from "react";

// Contexts
import { ValuesContext } from "../contexts/values";
import { UiContext } from "../../../contexts/ui-context";

// Hooks
import useValues from "./values";
import useHomeQueries from "../../../queries/use-home-queries";

// Types
import { GetUserData, LocationData } from "../../../api/home/types";

export default function useGet () {

  const { setSnackbarMessage } = useContext(UiContext)
  const { setUserList, setLocationList } = useContext(ValuesContext);
  const { useGetUsersByCompany, usePostGetGPSLocationsByDate } = useHomeQueries();
  const { getPostGetGPSLocationsByDateValues } = useValues();

  const { 
    isLoading:isLoadingGetUsersByCompany,
    mutate:mutateGetUsersByCompany
  } = useGetUsersByCompany(onSuccessGetUsersByCompany);

  const {
    isLoading:isLoadingPostGetGPSLocationsByDate,
    mutate:mutatePostGetGPSLocationsByDate
  } = usePostGetGPSLocationsByDate(onSuccessPostGetGPSLocationsByDate);

  const isLoading = {
    isLoadingPostGetGPSLocationsByDate
  }

  const isLoadingGet = isLoadingGetUsersByCompany;  

  // Start
  function startGetUsersByCompany () {
    mutateGetUsersByCompany();
  }

  function startPostGetGPSLocationsByDate (e:any) {
    e.preventDefault();
    mutatePostGetGPSLocationsByDate(getPostGetGPSLocationsByDateValues());
  }

  // On Success
  function onSuccessGetUsersByCompany (data:GetUserData[]) {
    const options = data.map(({ _id, username }) => ({ id:_id, label:username }));
    setUserList(options);
  }

  function onSuccessPostGetGPSLocationsByDate (data:LocationData[]) {
    setLocationList(data);
    setSnackbarMessage({ title:'Localizaciones Obtenidas', type:'info' });
  }

  return {
    isLoading,
    isLoadingGet,
    startGetUsersByCompany,
    startPostGetGPSLocationsByDate
  }

}
