import React from 'react';
import Nav from './Nav'

function Banner(props) {
    return (
<div className="BannerNav">
<Nav></Nav>
<section className="Banner-Section">
  <div class="hidden sm:block sm:inset-0 sm:absolute"></div>

  <div class="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-start lg:flex lg:justify-center sm:items-start sm:flex sm:justify-center">
    <div class="max-w-xl flex justify-center flex-col items-center sm:text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl text-white sm:text-white">
        Lorem ipsum dolor 
      </h1>

      <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white sm:font-bold sm:text-white text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
      </p>

      <div class="flex flex-wrap justify-center mt-8 text-center gap-4">
        <a class="block w-40 px-4 py-3 text-sm font-medium text-white rounded shadow bg-gray-700 sm:w-auto active:bg-gray-700 hover:bg-gray-400 focus:outline-none focus:ring" href="/get-started">
        Lorem ipsum dolor
        </a>
      </div>
    </div>
  </div>
  <div class="fixed right-0 bottom-0 flex p-4 justify-end">
    <button class="animate-bounce">
      <div class="bg-gray-200 rounded-full w-20 h-20 border-x-4 border-y-4 opacity-25">
      <div class="border-x-4 bg-gray-400 w-2 h-8 border-gray-700 translate-x-6 translate-y-6 -rotate-45"></div>
      <div class="border-x-4 bg-black w-2 h-8 -translate-y-2 border-gray-700 translate-x-10 rotate-45"></div> 
    </div>
    </button>
    </div>
</section>
</div>
);
}

export default Banner;
