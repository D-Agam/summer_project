import React from 'react'

function ContactUs() {
  return (
    <section id="contact-us" class="bg-gray-100 py-12">
    <div class="container mx-auto px-4 md:px-0">
        <div class="max-w-3xl mx-auto bg-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div class="p-6 md:p-8">
                <div class="flex items-center">
    
                    <svg class="w-8 h-8 mr-3 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 2H3a2 2 0 0 0-2 2v18l4-4h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                    </svg>
                    
                    <h2 class="text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
                </div>
                <p class="text-gray-700 mb-6">For assistance and inquiries, reach out to us:</p>
                <ul class="text-gray-700">
                    <li class="flex items-center mb-3">
                        <span>123 Banking Street, Pune, Maharashtra, India</span>
                    </li>
                    <li class="flex items-center mb-3">
                        <span>+91 9876543210</span>
                    </li>
                    <li class="flex items-center mb-3">
                    
                        <span>info@finscobank.com</span>
                    </li>
                </ul>
            </div>
            <div class="bg-blue-900 text-white px-6 py-4">
                <p class="text-lg">Our dedicated customer service team is available to assist you with any questions or concerns. Reach out to us via the contact details provided above.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactUs
