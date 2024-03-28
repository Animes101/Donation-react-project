import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData';

const Donation_details = () => {
    const [details ,setDetails]=useState({});
    const {id}=useParams();
    const {datas,isloading}=useFetchData();

    useEffect(()=>{

        const singleData=datas.find((item)=>item.id == id);
        setDetails(singleData);
    },[id ,datas]);

    const {categoryBg,title,description,cardBg,image,textColortitle,category} = details || {};

    console.log(details);
  return (
    <div>
        <img className='w-full' src={image} alt={title} />
        <p>{description}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Donation_details
