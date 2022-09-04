import React from 'react';

function SermonInfo(props) {
    return (
    <div class="grid grid-cols-3 justify-items-center bg-gray-900">
        <div>
        <div class="relative block p-8 pb-24 border-t-4 border-gray-900 hover:border-gray-400 rounded-sm shadow-xl">
  <h5 class="text-4xl font-bold text-gray-100">*In Korean* Korean Ministry</h5>
  <p class="mt-4 text-lg font-medium text-gray-100">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, provident.
  </p>
</div>
</div>
        <div>
        <div class="relative block p-8 pb-24 border-t-4 border-gray-900 hover:border-gray-400 rounded-sm shadow-xl">
  <h5 class="text-4xl font-bold text-gray-100">English Ministry</h5>
  <p class="mt-4 text-lg font-medium text-gray-100">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, provident.
  </p> 
    </div>
    </div>
      <div>
        <div class="relative block p-8 pb-24 border-t-4 border-gray-900 hover:border-gray-400 rounded-sm shadow-xl">
  <h5 class="text-4xl font-bold text-gray-100">Children's Ministry</h5>
  <p class="mt-4 text-lg font-medium text-gray-100">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, provident.
  </p> 
    </div>
    </div>
    </div>
    );
}

export default SermonInfo;