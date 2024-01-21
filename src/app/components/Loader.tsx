"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[70] flex flex-col justify-center items-center">
      <PuffLoader color="#FF385C" size={100} />
    </div>
  );
};

export default Loader;
