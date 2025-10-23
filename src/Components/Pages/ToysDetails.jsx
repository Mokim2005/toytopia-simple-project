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
      <h1 className="font-bold text-3xl text-center py-4">Toys Details</h1>
      <ToyDetailsCard toys={toys}></ToyDetailsCard>
      <Footer></Footer>
    </div>
  );
};

export default ToysDetails;
