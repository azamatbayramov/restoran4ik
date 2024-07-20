import Head from 'next/head';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login - Restoran4ik</title>
        <meta name="description" content="Login to Restoran4ik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
        <div className="bg-white p-8 sm:p-16 rounded shadow-lg w-full max-w-lg sm:w-[40rem]">
          <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Login</h1>
          <form className="space-y-6 sm:space-y-8">
            <div>
              <label htmlFor="username" className="block text-base sm:text-lg font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 sm:mt-2 block w-full px-4 py-3 sm:px-6 sm:py-4 border border-gray-300 rounded focus:outline-none focus:ring-cyan-400 focus:border-cyan-400"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-base sm:text-lg font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 sm:mt-2 block w-full px-4 py-3 sm:px-6 sm:py-4 border border-gray-300 rounded focus:outline-none focus:ring-cyan-400 focus:border-cyan-400"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-400 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded mt-6 sm:mt-8 hover:bg-cyan-500 transition duration-200"
            >
              Log In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}