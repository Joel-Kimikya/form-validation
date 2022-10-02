import React from 'react';
// import { useRouter } from 'next/router';

const Post = () => {
  // const route = useRouter();
  return (
    <div className='bg-fuchsia-900 flex justify-center items-center h-screen'>
      <div className='bg-white w-1/2 h-3/4 rounded-2xl shadow-2xl text-gray-600'>
        <div className='flex flex-row justify-around items-center h-[20%] text-lg font-bold'>
          <div></div>
          <div className='flex flex-row space-x-7'>
            {/* <button
              onClick={() => route.push('/')}
              className='hover:text-fuchsia-900'
            > */}
            <div> Sign In</div>
            {/* </button> */}
            {/* <button
              onClick={() => route.push('/SignUp')}
              className='hover:text-fuchsia-900'
            > */}
            <div> Sign Up</div>
            {/* </button> */}
          </div>
        </div>
        <div className='flex flex-row text-sm justify-around'>
          <div className='flex flex-row items-center space-x-5'>
            <label>First Name</label>
            <input
              type='text'
              placeholder='Enter First Name'
              className='bg-white border-2 border-gray-200 py-1 focus:outline-none px-3 text-black w-2/3 rounded-md'
            />
          </div>
          <div className='flex flex-row items-center space-x-5'>
            <label>Last Name</label>
            <input
              type='text'
              placeholder='Enter Last Name'
              className='bg-white border-2 border-gray-200 py-1 focus:outline-none px-3 text-black w-2/3 rounded-md'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
