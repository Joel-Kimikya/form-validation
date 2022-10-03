// import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Button from '../components/Button';

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
            <Button text='Sign In' onClick={() => void route.push('/')} />
            <Button text='Sign Up' onClick={() => void route.push('/post')} />
          </div>
        </div>
        <div className='flex flex-col md:space-y-7 space-y-5 md:m-8 m-14'>
          <div className='md:flex md:flex-row md:items-center md:space-x-14 flex flex-col'>
            <label>Username</label>
            <input
              type='text'
              placeholder='Enter Username'
              className='bg-white border-2 border-gray-200 py-2 focus:outline-none px-4 text-black md:w-2/3 rounded-md'
            />
          </div>
          <div className='md:flex md:flex-row md:items-center md:space-x-16 flex flex-col'>
            <label>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              className='bg-white border-2 border-gray-200 py-2 focus:outline-none px-4 text-black md:w-2/3 rounded-md'
            />
          </div>
          <div className='md:flex md:flex-row md:items-center md:space-x-4 flex flex-col'>
            <label>Password Check</label>
            <input
              type='password'
              placeholder='Check Password'
              className='bg-white border-2 border-gray-200 py-2 focus:outline-none px-4 text-black md:w-2/3 rounded-md'
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

export default Home;
