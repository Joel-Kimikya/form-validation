// import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const route = useRouter();
  return (
    <div className='bg-fuchsia-900 flex justify-center items-center h-full xl:h-screen'>
      <div className='bg-white rounded-2xl shadow-2xl text-gray-600 p-7'>
        <div className='flex flex-row justify-around items-center m-6 text-lg font-bold'>
          <div></div>
          <div className='flex flex-row space-x-7'>
            <button
              onClick={() => void route.push('/')}
              className='hover:text-fuchsia-900'
            >
              <div> Sign In</div>
            </button>
            <button
              onClick={() => void route.push('/SignUp')}
              className='hover:text-fuchsia-900'
            >
              <div> Sign Up</div>
            </button>
          </div>
        </div>
        <div className='space-y-5'>
          <div className='flex justify-around items-center'>
            <label>FirstName</label>
            <input
              type='text'
              placeholder='Enter FirstName'
              className='bg-white border-2 border-gray-200 py-1 focus:outline-none px-6 text-black w-2/3 rounded-md'
            />
          </div>
          <div className='flex justify-around items-center'>
            <label>LastName</label>
            <input
              type='text'
              placeholder='Enter LastName'
              className='bg-white border-2 border-gray-200 py-1 focus:outline-none px-6 text-black w-2/3 rounded-md'
            />
          </div>
          <div className='flex justify-around items-center'>
            <label>UserName</label>
            <input
              type='text'
              placeholder='Enter UserName'
              className='bg-white border-2 border-gray-200 py-1 focus:outline-none px-6 text-black w-2/3 rounded-md'
            />
          </div>
          <div className='flex justify-around items-center'>
            <label> Email address</label>
            <input
              type='email'
              placeholder='Enter your email address'
              className='bg-white border-2 border-gray-200 py-1 focus:outline-none px-6 text-black w-2/3 rounded-md'
            />
          </div>
          <div className='flex justify-around items-center'>
            <label> Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              className='bg-white border-2 border-gray-200 py-1 focus:outline-none px-6 text-black w-2/3 rounded-md'
            />
          </div>
          <div className='flex justify-around items-center'>
            <label> Password Check</label>
            <input
              type='email'
              placeholder='Enter your email address'
              className='bg-white border-2 border-gray-200 py-1 focus:outline-none px-6 text-black w-2/3 rounded-md'
            />
          </div>
          <div className='flex flex-col m-5 space-y-3 capitalize text-sm'>
            <label>why you want to be member, Fill in the section bellow</label>
            <textarea className='border-2 border-gray-200 focus:outline-none'></textarea>
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <div className='flex w-28 justify-center border-2 py-2 rounded-md hover:bg-fuchsia-100 transition ease-out duration-700 text-gray-700 font-bold'>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
