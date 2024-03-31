import React, { useEffect, useState } from "react";

import heroBackgrund from "../assets/Clothing.png";
import CetagurisList from "../components/CetagurisList";
import useFetchData from "../hooks/useFetchData";
import LoadDataSpiner from "../components/LoadDataSpiner";

const Home = () => {
  const [value, setValue] = useState("");
  const { datas, isLoading } = useFetchData();
  const [totalData ,setToatalData]=useState([]);


  useEffect(()=>{
    setToatalData(datas)
  },[datas]);

  const hanldeChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    if(value.trim() !== ''){
    const filterData=datas.filter((item)=>item.category.toLowerCase().includes(value.toLocaleLowerCase()))
      setToatalData(filterData)


    }else{
      setToatalData(datas);
    }

    setValue('')
    
  };
  
  if(isLoading){
    return <LoadDataSpiner />
  }

  return (
    <div className="w-[90%] mx-auto">
      <div
        className="hero min-h-[calc(100vh-93px)]"
        style={{
          backgroundImage: `url(${heroBackgrund})`
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
              I Grow By Helping People In Need
            </h1>
            <label className="input input-bordered outline outline-[#FF444A] flex items-center bg-transparent  gap-2">
              <input
                onChange={hanldeChange}
                type="text"
                value={value}
                className="grow bg-transparent text-white"
                placeholder="Search"
              />
              <span
                onClick={handleSearch}
                className="rounded-md text-black cursor-pointer bg-[#FF444A] p-2"
              >
                Search
              </span>
            </label>
          </div>
        </div>
      </div>
      <CetagurisList  totalData={totalData} />
    </div>
  );
};

export default Home;
