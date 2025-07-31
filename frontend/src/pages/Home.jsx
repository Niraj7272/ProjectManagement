import React from "react";

const Home = () => {
  return (
    <div className="h-[100rem] relative">
      <div className="sticky top-0">
        <img src="/src/assets/university.jpg" alt="" className="h-[33rem] w-[81rem] ml-[2rem] bg-red-400" />
      </div>
      <div className="absolute mt-[-20rem] pl-[35rem]">
        <h1 className="text-white font-bold text-[2rem]">Welcome to the collage</h1>
      </div>
    </div>
  );
};

export default Home;
