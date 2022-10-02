// import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the home page
 * @returns {JSX.Element}: JSX Code for Home
 * @license MIT
 * @version 1.0.0
 */
const Home: NextPage = (): JSX.Element => {
  const route = useRouter();

  return (
    <div className='bg-fuchsia-900 flex justify-center items-center h-screen'>
      <div className='bg-white rounded-2xl shadow-2xl text-gray-600'>
        <div className='flex flex-row justify-around items-center mt-7 text-lg font-bold'>
          <div></div>
          <div className='flex flex-row space-x-7'>
            <button
              onClick={() => void route.push('/')}
              className='hover:text-fuchsia-900'
            >
              <div> Sign In</div>
            </button>
            <button
              onClick={() => void route.push('/post')}
              className='hover:text-fuchsia-900'
            >
              <div> Sign Up</div>
            </button>
          </div>
        </div>
        <div className='flex flex-col space-y-7 m-8'>
          <div className='flex flex-row items-center space-x-14'>
            <label>Username</label>
            <input
              type='text'
              placeholder='Enter Username'
              className='bg-white border-2 border-gray-200 py-2 focus:outline-none px-4 text-black w-2/3 rounded-md'
            />
          </div>
          <div className='flex flex-row items-center space-x-16'>
            <label>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              className='bg-white border-2 border-gray-200 py-2 focus:outline-none px-4 text-black w-2/3 rounded-md'
            />
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <label>Password Check</label>
            <input
              type='password'
              placeholder='Check Password'
              className='bg-white border-2 border-gray-200 py-2 focus:outline-none px-4 text-black w-2/3 rounded-md'
            />
          </div>
          <div className='flex flex-row items-center justify-center space-x-4'>
            <div className='flex w-28 justify-center border-2 py-2 rounded-md hover:bg-fuchsia-100 transition ease-out duration-700 text-gray-700 font-bold'>
              <button>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <button onClick={() => route.push('/post')}>Post</button> */
}

export default Home;
