import React from 'react';

function SermonInfo(props) {
    return (

    <div class="grid grid-cols-3 gap-4 justify-items-center bg-gray-900">
        <div>
        <button class="p-8 pb-24 border-t-4 border-white rounded-sm shadow-xl text-center">
        <h5 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-100">Korean Ministry</h5>
        <p class="text-sm sm:text-md md:text-lg mt-4 font-medium text-gray-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, provident.
        </p>
      </button>
      </div>
        <button>
        <div class="p-8 pb-24 border-t-4 border-white rounded-sm shadow-xl text-center">
      <h5 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-100">English Ministry</h5>
      <p class="text-sm sm:text-md md:text-lg mt-4 font-medium text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, provident.
      </p> 
        </div>
        </button>
      <button>
        <div class="p-8 pb-24 border-t-4 border-white rounded-sm shadow-xl text-center">
        <h5 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-100">Children's Ministry</h5>
        <p class="text-sm sm:text-md md:text-lg mt-4 font-medium text-gray-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, provident.
        </p> 
          </div>
          </button>
    </div>
    );
}

export default SermonInfo;