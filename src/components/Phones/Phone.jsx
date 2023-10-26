import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetails from "./PhoneDetails";

const Phone = () => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();
  const phones = useLoaderData();
  console.log(phones)
  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);
  return (
   <div  className="h-[90vh] ">
     <div className=" md:flex justify-center items-center pt-32">
     <PhoneDetails phone={phone}></PhoneDetails>
    </div>
   </div>
  );
};

export default Phone;
