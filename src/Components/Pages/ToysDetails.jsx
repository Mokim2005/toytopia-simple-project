import Navber from "../Navber";
import Footer from "../Footer";
import ToyDetailsCard from "../ToyDetailsCard";
import { useLoaderData, useParams } from "react-router";
import { useEffect, useState } from "react";

const ToysDetails = () => {
  const data = useLoaderData();
  const { toyId } = useParams();
  const [toys, setToys] = useState({});

  console.log(data, toyId, toys);

  useEffect(() => {
    const toysDetails = data.find((singleToys) => singleToys.toyId == toyId);
    setToys(toysDetails);
  }, [data, toyId]);
  return (
    <div className="w-11/12 mx-auto">
      <Navber></Navber>
      <h1
        className="text-3xl font-semibold w-full text-center mb-6 
  text-white bg-gradient-to-r from-yellow-200/50 via-black/50 to-pink-500/50 
  py-3 rounded-xl backdrop-blur-sm shadow-md mx-auto px-8"
      >
        Toys Details
      </h1>

      <ToyDetailsCard toys={toys}></ToyDetailsCard>
      <Footer></Footer>
    </div>
  );
};

export default ToysDetails;
