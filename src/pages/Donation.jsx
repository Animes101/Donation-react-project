import DonationCard from "../components/DonationCard";
import useLocalStrorage from "../hooks/useLocalStrorage";


const Donation = () => {


  const {localData ,isLoading}=useLocalStrorage();

  return (
    <div className="w-3/4 mx-auto grid grid-cols-1 gap-y-8 space-y-4 mt-6">
      {localData?.map((data,index)=><DonationCard data={data} key={index} />)}

    </div>
  )
}

export default Donation;
