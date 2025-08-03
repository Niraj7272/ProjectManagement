import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className=" bg-white h-[60rem] border-1 border-blue-500 w-[80rem] ml-[2rem]">
        <div className="">
          <img
            src="src/assets/location1.avif"
            alt=""
            className="w-[80rem] h-[30rem] relative"
          />
          <h1 className="absolute top-[10rem] ml-[15rem] text-white text-[2.4rem] font-bold">
            Get In Touch
          </h1>
          <p className="absolute top-[14rem] ml-[15rem] w-[30rem] text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            sapiente eaque alias sed maxime, quaerat quidem cumque ipsam nulla
            voluptatum doloremque voluptatem labore illo quis minima voluptate
            facere aperiam sit.
          </p>
          <div className="flex absolute top-[20rem] ml-[15rem] mt-[3rem]">
            <div className="bg-white h-[20rem] w-[33rem] shadow-2xl shadow-black">
              <div className="flex">
                <h1 className="text-blue-800 text-[1.2rem] font-bold ml-[4rem] mt-[2rem]">
                  Send us a Message
                </h1>
                <img
                  src="src/assets/comments.png"
                  alt=""
                  className="h-[2rem] mt-[2rem] ml-[14rem]"
                />
              </div>
              <div className="flex">
              <div className="ml-[4rem] mt-[2rem] text-gray-500">
                <label htmlFor="">Your Name</label>
                <br />
                <input type="text" className="border-1 border-gray-400" />
                <br />
                <label htmlFor="">Your Name</label>
                <br />
                <input type="text" className="border-1 border-gray-400" />
                <br />
                <label htmlFor="">Your Name</label>
                <br />
                <input type="text" className="border-1 border-gray-400" />
                <br />
              </div>
              <div className="ml-[3rem] mt-[2rem] text-gray-500">
                <label htmlFor="">Your Name</label>
                <br />
                <input type="text" className="border-1 border-gray-400" />
                <br />
                <label htmlFor="">Your Name</label>
                <br />
                <input type="text" className="border-1 border-gray-400" />
                <br />
                <button className="cursor-pointer"><img src="src/assets/telegram.png" alt=""  className="h-[3.5rem] ml-[8rem] mt-[2.5rem]"/></button>
              </div>
              </div>
            </div>
            <div className="bg-blue-800 h-[20rem] w-[18rem]">
              <h1 className="text-white ml-[3rem] mt-[2rem] text-[1.2rem] font-bold">
                Contact Information
              </h1>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img
              src="src/assets/logoimg.jpg"
              alt=""
              className="h-[4rem] mt-[19rem] ml-[15rem]"
            />
            <p className="text-gray-600 ml-[10rem] w-[20rem] mt-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, hic esse. Similique repellat architecto inventore .
            </p>
          </div>
          <div className="mt-[22rem] font-bold text-gray-600 ml-[3rem]">
            <h1>Products</h1>
            <h1>About</h1>
            <h1>Blog</h1>
            <h1>Contact</h1>
          </div>
          <div className="mt-[22rem] font-bold text-gray-600 ml-[2rem]">
            <h1>Help</h1>
            <h1>Privacy Policy</h1>
            <h1>Support</h1>
            <h1>Terms And Condition</h1>
          </div>
          <div className="mt-[22rem] ml-[5rem] font-semibold text-gray-600">
            <h1>Biratnagar 11 </h1>
            <h1>Mahendra Chowk,Morang</h1>
            <div className="flex">
              <h1>9811111111,</h1>
              <h2 className="text-blue-700 ml-[0.5rem]">nc72723@gmail.com</h2>
            </div>
            <div className="flex">
              <img
                src="src/assets/twitter (1).png"
                alt=""
                className="h-[1.7rem]"
              />
              <img
                src="src/assets/linkedin.png"
                alt=""
                className="h-[1.7rem] ml-[1rem]"
              />
              <img
                src="src/assets/instagram.png"
                alt=""
                className="h-[2.2rem] ml-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
