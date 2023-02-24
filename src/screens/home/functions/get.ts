// Moduless
import { useContext } from "react";

// Contexts
import { ValuesContext } from "../contexts/values";

// Hooks
import useValues from "./values";
import useHomeQueries from "../../../queries/use-home-queries";

// Types
import { GetUserData } from "../../../api/home/types";

export default function useGet () {

  const { setUserList } = useContext(ValuesContext);
  const { useGetUsersByCompany, usePostGetGPSLocationsByDate } = useHomeQueries();
  const {  getPostGetGPSLocationsByDateValues } = useValues();

  const { 
    isLoading:isLoadingGetUsersByCompany,
    mutate:mutateGetUsersByCompany
  } = useGetUsersByCompany(onSuccessGetUsersByCompany);

  const {
    isLoading:isLoadingPostGetGPSLocationsByDate,
    mutate:mutatePostGetGPSLocationsByDate
  } = usePostGetGPSLocationsByDate();

  const isLoading = {
    isLoadingPostGetGPSLocationsByDate
  }

  const isLoadingGet = isLoadingGetUsersByCompany;
  
  function startGetUsersByCompany () {
    mutateGetUsersByCompany();
  }

  function startMutatePostGetGPSLocationsByDate () {
    mutatePostGetGPSLocationsByDate( getPostGetGPSLocationsByDateValues());
  }

  function onSuccessGetUsersByCompany (data:GetUserData[]) {
    const options = data.map(({ _id, username }) => ({ id:_id, label:username }));
    setUserList(options);
  }

  return {
    isLoading,
    isLoadingGet,
    startGetUsersByCompany,
    startMutatePostGetGPSLocationsByDate
  }

}
