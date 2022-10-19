import Image from 'next/image'
import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }
  return (
    <header
    className='sticky top-0 bg-white'>
        <div 
        className='flex w-full p-6 items-center'>
        <Image
      onClick={() => router.push("/")}
      className='cursor-pointer'
      src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      width={110}
      height={40} />

      <form
      className='flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 
      ml-10 mr-5 flex-grow'>
        <input 
        className='flex-grow w-full focus:outline-none'
        ref={searchInputRef} 
        type="text" />

        <XIcon 
        className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
        onClick={() => (searchInputRef.current.value = "")}
        />
        <MicrophoneIcon 
        className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'
        />
        <SearchIcon
        className='h-6 text-blue-500 hidden sm:inline-flex' />
        <button hidden type='submit' onClick={search}>Search</button>
      </form>

      <Avatar 
      className='ml-auto '
      url="https://lh5.googleusercontent.com/-w6-L0t4myp4/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJNgdzaPGVs4BjL1ZFChdGY8LEakvw/c/photo.jpg?height=180&width=180"/>
        </div>

        {/*HeaderOptions */}
        <HeaderOptions />
      
    </header>
  )
}

export default Header
