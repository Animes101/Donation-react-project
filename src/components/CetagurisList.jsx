import React from 'react'
import useFetchData from '../hooks/useFetchData';
import CetagurisCard from './CetagurisCard';
import LoadDataSpiner from './LoadDataSpiner';


const CetagurisList = ({totalData}) => {

    const {datas,isLoading}=useFetchData();


    if(isLoading){
      return <LoadDataSpiner />
    }
   
  return (
    <div className='grid grid-cols-4 gap-10 py-10'>
      {totalData.map((data)=><CetagurisCard key={data.id} data={data}  />)}
    </div>
  )
}

export default CetagurisList
