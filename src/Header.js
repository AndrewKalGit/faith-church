import React from 'react';

function Header(props) {
    return (
<div class="bg-slate-700 opacity-75">
<div class="relative px-4 py-3 text-white gray-300 opacity-70 pr-14">
  <p class="text-sm font-medium text-left sm:text-center">
    *Significant event coming up* Add in here 

    <a class="underline" href="/annoucement"> Learn More &rarr; </a>
  </p>

  <button
    aria-label="Close"
    class="absolute p-1 rounded-lg transition -translate-y-1/2 top-1/2 right-4 bg-black/10 hover:bg-black/20"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</div>
        </div>
    );
}

export default Header;