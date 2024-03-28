import React, { useEffect, useState } from 'react'

const useFetchData = () => {

    const [datas ,setDAtas]=useState([]);
    const [isLoading ,seIsloading]=useState(true);

    useEffect(()=>{
        (async()=>{
            const res = await fetch('/db.json');
            const data =await res.json();
            setDAtas(data);

        })();

    },[])
  return {datas ,isLoading}
}

export default useFetchData;
