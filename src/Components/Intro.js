import React from 'react'

function Intro() {
  return (
    <section class="bg-blue-300 py-8 md:py-20 bg-cover bg-center" >
    <div class="container mx-auto text-center " >
        <h1 class="text-7xl font-bold mb-4 text-blue-900">Welcome to Finsco Bank</h1>
    
        <p class="text-3xl mb-8 text-white">Your trusted partner for financial solutions.</p>
        <br />
        <p class="text-3xl mb-8 px-10 text-white">We offer a variety of services to meet your financing needs.Head to the services section to explore each and get started.</p>
        <br />
        <a href="#services" class="bg-white text-blue-900 py-2 px-6 rounded-full font-semibold">View services</a>
    </div>
</section>

  )
}

export default Intro
