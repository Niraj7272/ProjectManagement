import React from 'react'

const Login = () => {
  return (
    <div className='bg-gray-400 h-[20rem] w-[30rem] ml-[28rem] mt-[8rem] shadow-2xl shadow-black'>
        <form action="">
            <h1 className='font-bold text-blue-800 text-[1.7rem] ml-[12rem] pt-[2rem]'>Login</h1>
            <input type="email" placeholder='Enter Your Email' className='border-1 border-gray-800 h-[2rem] w-[26rem] text-black bg-white ml-[2rem] mt-[3rem]'/><br />
            <input type="password" placeholder='Enter your Password' className='border-1 border-gray-800 h-[2rem] w-[26rem] text-black bg-white ml-[2rem] mt-[1rem]'/><br /><br />
            <button className='bg-blue-800 text-white h-[2rem] w-[26rem] ml-[2rem] cursor-pointer hover:bg-blue-500 '>login</button>
        </form>
    </div>
  )
}

export default Login