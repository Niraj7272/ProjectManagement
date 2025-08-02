import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className='flex mt-[3rem] ml-[8rem] mr-[7rem]'>
          <div className=''>
            <h1 className='text-[2rem] text-gray-800 font-bold'>About Us</h1>
            <p className='w-[40rem] mt-[2rem] text-gray-700'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio cumque molestiae totam nobis iure officiis praesentium perspiciatis dolorem! Saepe nesciunt esse fugit illum fugiat repellat fuga ipsa animi amet aperiam.
            </p>
          </div>
          <div className='ml-[10rem]'>
            <img src="src/assets/images (1).jpg" alt=""  className='h-[15rem] w-[20rem]'/>
          </div>
      </div>
      <div className='flex mt-[5rem]'>
          <div className='ml-[8rem]'>
              <img src="src/assets/istockphoto-1179405499-612x612.jpg" alt="" className='h-[20rem] w-[80rem]'/>
          </div>
          <div className='ml-[3rem] mr-[7rem] mt-[3rem]'>
            <h1 className='text-[2rem] font-bold text-gray-800 w-[35rem]'>Our Mission: Helping Millions of Students Grow Better</h1>
            <p className='mt-[2rem] text-gray-700'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptas adipisci expedita laborum esse mollitia illo quisquam numquam explicabo cum, fugit eum quia consectetur hic distinctio est tempore unde blanditiis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, magni rem. Natus dolores quibusdam officiis quas rem nesciunt minus vitae animi eveniet officia atque quasi, ipsam doloremque minima dicta deserunt.
            </p>
          </div>
      </div>
    </div>
  )
}

export default AboutUs