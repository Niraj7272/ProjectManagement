import React from 'react'

const Login = () => {
  return (
    <div>
        <form action="">
            <h1>Login</h1>
            <input type="email" placeholder='Enter Your Email' /><br /><br />
            <input type="password" placeholder='Enter your Password' /><br /><br />
            <button className='bg-blue-800 text-white w-[10rem] cursor-pointer hover:bg-blue-500'>login</button>
        </form>
    </div>
  )
}

export default Login