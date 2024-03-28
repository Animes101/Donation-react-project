import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from "@material-tailwind/react";
import { saveData } from "../utils/localStorage";


const Donation_details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const { datas, isloading } = useFetchData();

  const handleDonation = () => {
    // saveData(details);
    saveData(details)

    console.log(details);
  };

  useEffect(() => {
    if (datas) {
      const singleData = datas.find((item) => item.id === +id);
      setDetails(singleData);
    }
  }, [id, datas]);

  const { categoryBg, title, description, cardBg, image, category, price } =
    details || {};

  return (
    <div className="w-4/5 mx-auto h-screen flex justify-center items-center">
      <Card
        style={{ background: cardBg }}
        className="w-full flex-row border border-black"
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {category}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {description}
          </Typography>
          <p className="inline-block">
            <Button
              style={{ background: categoryBg , }}
              onClick={handleDonation}
              variant="text"
              className="flex items-center gap-2 text-black font-bold" 
            >
             Donation {price}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Donation_details;
