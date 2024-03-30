import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const DonationCard = ({data}) => {
    const {description,image,title,cardBg,category}=data || {};

  return (
    <div>
      <Card style={{background:cardBg}} className="w-full  flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
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
        </CardBody>
      </Card>
    </div>
  );
};

export default DonationCard;
