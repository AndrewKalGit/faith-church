import React from 'react';
import Logo from './Img/Screen Shot 2022-09-03 at 10.54.56 PM.png'

function Nav(props) {
    return (
<div>
<nav class="flex items-center justify-between p-4 mx-auto">
  <a
    class="inline-flex items-center justify-center w-24 h-12 rounded-lg"
    href="/home"
  >
    <img class="ml-24 mt-8" src={Logo} alt="Logo"></img>
  </a>

  <ul class="hidden lg:flex items-center text-md font-bold text-white space-x-2">
    <li>
     <a class="px-3 py-2 rounded-lg hover:underline" href="/"> Home </a> </li>

    <li><a class="px-3 py-2 rounded-lg hover:underline" href="about">About</a></li>

    <li><a class="px-3 py-2 rounded-lg hover:underline" href="contact"> Get in touch </a></li>

    <li><a class="px-3 py-2 rounded-lg hover:underline" href="Ministries"> Ministries </a></li>

    <li><a class="px-3 py-2 rounded-lg hover:underline" href="Ministries"> Get Involved</a></li>
  </ul>
</nav>

<nav class="flex text-white text-center justify-center lg:hidden">
  <ul>
    <li>
      <a class="px-3 py-2 rounded-lg hover:underline" href="/"> Home </a> 
    </li>
    <li>
      <a class="px-3 py-2 rounded-lg hover:underline" href="about">About</a>
    </li>
    <li>
      <a class="px-3 py-2 rounded-lg hover:underline" href="contact"> Get in touch</a>
    </li>
    <li>
      <a class="px-3 py-2 rounded-lg hover:underline" href="Ministries"> Ministries</a>
    </li>
    <li>
      <a class="px-3 py-2 rounded-lg hover:underline" href="Ministries"> Get Involved</a>
    </li>
  </ul>
</nav>
        </div>
    );
}

export default Nav;