// import React from 'react';
import { useRouter } from 'next/router';
import Button from '../components/Button';
// import { type } from 'os';

const Post = () => {
  const route = useRouter();
  return (
    <div className='bg-fuchsia-900 flex justify-center items-center h-full xl:h-screen'>
      <div className='bg-white rounded-2xl shadow-2xl text-gray-600 p-7'>
        <div className='flex flex-row justify-around items-center m-6 text-lg font-bold'>
          <div></div>
          <div className='flex flex-row space-x-7'>
            <Button text='Sign In' onClick={() => void route.push('/')} />
            <Button text='Sign Up' onClick={() => void route.push('/post')} />
          </div>
        </div>
        <div className='space-y-5'>
          <InputField
            label='FirstName'
            placeholder='Enter FirstName'
            type='text'
          />
          <InputField
            label='LastName'
            placeholder='Enter lastName'
            type='text'
          />
          <InputField
            label='UserName'
            placeholder='Enter UserName'
            type='text'
          />
          <InputField
            label='Email address'
            placeholder='Enter your email'
            type='email'
          />
          <InputField
            label='Password'
            placeholder='Enter Password'
            type='password'
          />
          <InputField
            label='Password Check'
            placeholder='Enter Password'
            type='password'
          />

          <div className='flex flex-col m-5 space-y-3 capitalize text-sm'>
            <label>why you want to be member, Fill in the section bellow</label>
            <textarea className='border-2 border-gray-200 focus:outline-none'></textarea>
          </div>
        </div>
        <div className='flex justify-center my-4 space-x-5'>
          <div className='flex w-28 justify-center border-2 py-2 rounded-md hover:bg-fuchsia-100 transition ease-out duration-700 text-gray-700 font-bold'>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

type Itext = {
  label: string;
  type: string;
  placeholder: string;
};

const InputField = ({ label, type, placeholder }: Itext) => {
  return (
    <div className='md:flex md:flex-row md:justify-around md:items-center flex flex-col'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className='bg-white border-2 border-gray-200 py-1 focus:outline-none px-6 text-black md:w-2/3 rounded-md'
      />
    </div>
  );
};
