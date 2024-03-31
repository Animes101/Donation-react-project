import React, { useEffect, useState } from 'react'
import { getDAta } from '../utils/localStorage';


const useLocalStrorage = () => {

    const [localData ,setLocalData]=useState([]);
    const [isLoading ,setIsLoading]=useState(true);

    useEffect(()=>{
        setLocalData(getDAta());
        setIsLoading(false)


    },[])
  return {localData ,isLoading}
}

export default useLocalStrorage
