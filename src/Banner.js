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
</section>
<div class="flex justify-center">
<button class="text-white mb-4"> Hello </button>
</div>
</div>
);
}

export default Banner;
