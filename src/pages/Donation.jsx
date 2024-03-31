import DonationCard from "../components/DonationCard";
import LoadDataSpiner from "../components/LoadDataSpiner";
import NofoundData from "../components/NofoundData";
import useLocalStrorage from "../hooks/useLocalStrorage";
import React, { useState } from "react";

const Donation = () => {
  const [isShowAll, setIsShowAll] = useState(false);

  const { localData, isLoading } = useLocalStrorage();

  if(localData.length <1){
    return <NofoundData />
  }
if(isLoading){
  return <LoadDataSpiner />
}

  return (
    <div className="w-3/4 mx-auto grid grid-cols-1 gap-y-8 space-y-4 mt-6">
      {localData
        ?.slice(0, isShowAll ? localData.length : 2)
        .map((data, index) => (
          <DonationCard data={data} key={index} />
        ))}
      {localData.length > 2 ? (
        <div className="flex justify-center items-center ">
          <button
            onClick={() => setIsShowAll(!isShowAll)}
            className="rounded-lg border-2 border-sky-500 px-8 py-3 text-xl text-sky-500 bg-green-300 duration-200 hover:bg-green-500 hover:text-white"
          >
            {isShowAll ? "See less" : "see All"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Donation;
