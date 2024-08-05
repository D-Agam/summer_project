import React from 'react'

function Features() {
  return (
    <section id="services" class="py-20 bg-gray-100">
    <div class="container mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-10 text-blue-900">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">Online Banking</h3>
                <p>Enjoy the convenience of managing your accounts online, anytime, anywhere.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">Loans & Mortgages</h3>
                <p>Get the financial support you need with our loan and mortgage options.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">Investment Services</h3>
                <p>Grow your wealth with our expert investment advice and services.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">Retirement Planning</h3>
                <p>Plan your retirement with our tailored retirement planning services.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">Insurance</h3>
                <p>Protect yourself and your loved ones with our comprehensive insurance plans.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">Credit Cards</h3>
                <p>Choose from a range of credit cards that suit your lifestyle and needs.</p>
            </div>
            <a></a>
            <a href="#documents" class="bg-white border-solid text-blue-900 py-2 align-middle rounded-full font-semibold">Apply Now</a>
            <a> </a>
        </div>
        
    </div>
</section>
  )
}

export default Features
