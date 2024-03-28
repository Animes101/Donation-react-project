import React from 'react'
import useFetchData from '../hooks/useFetchData';
import CetagurisCard from './CetagurisCard';


const CetagurisList = () => {
    const {datas,isLoading}=useFetchData();
  return (
    <div className='grid grid-cols-4 gap-10 py-10'>
      {datas.map((data)=><CetagurisCard key={data.id} data={data} />)}
    </div>
  )
}

export default CetagurisList
