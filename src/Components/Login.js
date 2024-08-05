import React from 'react'

function Login() {
  return (
    <section id="login" class="py-20 bg-gray-200 ">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-full mx-20">
        <h2 class="text-3xl font-bold mb-8 text-center text-blue-900">Login</h2>
        <form action="/login" method="post" class="space-y-4 text-center">
            <div >
                <label for="username" class="inline text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" name="username" required
                       class="mt-1 inline w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
            </div>
            <div > 
                
                <label for="password" class="inline text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" required
                       class="mt-1 inline w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
            </div>
            <button type="submit"
                    class="w-1/3 bg-blue-900 text-white py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Login
            </button>
            <br />
            <a href="#forgotpwd" class="text-xs underline text-blue-800">Forgot Password?</a>
        </form>
    </div>
</section>
  )
}

export default Login
