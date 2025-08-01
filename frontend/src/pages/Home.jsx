import React from "react";

const Home = () => {
  return (
    <div className="h-[100rem] relative">
      <div className="sticky top-0">
        <img src="/src/assets/university.jpg" alt="" className="h-[33rem] w-[81rem] ml-[2rem] bg-red-400" />
      </div>
      <div className="absolute mt-[-20rem] ">
        <h1 className="text-white font-bold text-[2rem] pl-[35rem]">Welcome to the collage</h1>
        <p className="text-blue-800 font-bold pl-[14rem] pr-[14rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit similique qui quia a, veniam, in reiciendis tempora, ab corrupti accusamus porro obcaecati esse recusandae itaque consectetur consequatur. Laudantium, sunt eum.</p>
        <button className="bg-white text-blue-800 font-bold h-[2rem] w-[10rem] ml-[38rem] mt-[1rem] cursor-pointer">Login</button>
      </div>
    </div>
  );
};

export default Home;
