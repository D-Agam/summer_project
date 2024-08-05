import React from 'react'

function Header() {
  return (
    <header class="bg-blue-900 text-white py-3 fixed top-0 z-10 w-full">
    <div class="container mx-auto flex justify-between items-center px-4">
        <div class="text-4xl font-bold">Finsco Bank</div>
       <nav>
            <ul class="flex space-x-4">
                <li><a href="index.html" class="hover:underline">Home</a></li>
                <li><a href="#login" class="hover:underline">Login</a></li>
                <li><a href="#application" class="hover:underline">Register</a></li>
                <li><a href="#contact-us" class="hover:underline">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>

  )
}

export default Header
