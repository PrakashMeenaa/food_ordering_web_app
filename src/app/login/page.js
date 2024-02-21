import React from 'react'

const page = () => {
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="flex fle-col mt-20 mb-36 h-max justify-center py-6 px-4">
        <div className="flex justify-center  max-w-6xl w-full">
          <form className="space-y-6 max-w-md  max-md:mx-auto w-full">
            <h3 className="text-5xl text-center font-extrabold mb-8 max-md:text-center">
              Sign in
            </h3>
            <div>
              <input name="email" type="email" autoComplete="email" required className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-xl outline-primary" placeholder="Email address" />
            </div>
            <div>
              <input name="password" type="password" autoComplete="current-password" required className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-xl outline-primary" placeholder="Password" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="jajvascript:void(0);" className="text-primary hover:text-primary">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="!mt-10">
              <button type="button" className="w-full shadow-xl py-2.5 px-4  font-semibold rounded-xl text-white bg-primary hover:bg-red-600 focus:outline-none">
                Log in
              </button>
            </div>
            <p className="my-10 text-sm text-gray-400 text-center">or continue with</p>
            <div className="space-x-6 flex justify-center">
              <button type="button"
                className="flex  justify-center gap-7 rounded-xl text-black w-full  py-2.5 px-4 font-semibold border-[1px] border-gray-400 items-center outline-primary hover:bg-primary hover:text-white focus:outline-red-800 h-max">
                <img className="h-7" src="/google.png" alt="" /> Login with Google
              </button>
             
             
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page
