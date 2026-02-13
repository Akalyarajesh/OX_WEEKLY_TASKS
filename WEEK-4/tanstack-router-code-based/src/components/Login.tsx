const Login = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center font-sans">
      <div className="w-60 h-100 flex flex-col sm:flex-row rounded-lg sm:w-2/3 sm:h-125 sm:flex bg-[url('../assets/bg.jpeg')] bg-cover bg-center bg-no-repeat sm:rounded-2xl">
        {/* Website Name  */}
        <div className="w-full h-[30%] sm:w-[55%] mt-6 flex items-center justify-center sm:items-center sm:justify-center flex-col">
          <h1 className="text-xl text-white sm:text-4xl font-sans font-semibold">
            SHOPIFY
          </h1>
          <p className="hidden sm:text-white sm:block">
            Everything you need, one perfect place.
          </p>
        </div>

        {/* Login Form  */}
        <div className="bg-white rounded-lg sm:rounded-2xl w-full h-[70%] sm:w-[45%] sm:h-full flex flex-col items-center p-5">
          <h2 className="text-blue-900 text-xl sm:text-3xl font-semibold sm:mt-5">
            Welcome
          </h2>
          <p className="text-[10px] mt-1 sm:text-[15px] sm:mt-2">
            Login in to your accout to continue
          </p>

          <form action="" className="flex flex-col mt-8 sm:mt-12">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-1 mb-3 sm:px-14 sm:py-2 sm:mb-6 border rounded-full text-center"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-1 sm:px-14 sm:py-2 sm:mb-2 border rounded-full text-center"
            />
            <p className="self-end text-xs mb-3 sm:mb-10 sm:text-sm">
              <a href="#" className="underline">
                forgot your password?
              </a>
            </p>
            <button
              type="submit"
              className="w-full px-4 py-1 sm:px-14 sm:py-2 mb-1 bg-linear-to-r from-blue-800 to-blue-500 text-white rounded-full text-center pointer hover:bg-linear-to-r hover:from-blue-500 hover:to-blue-800"
            >
              LOGIN
            </button>
          </form>
          <p className="text-xs sm:text-[15px] sm:mt-5">
            Don't have an account
            <a href="#" className="underline text-blue-800">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
