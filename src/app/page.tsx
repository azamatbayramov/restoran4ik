import Head from 'next/head';
import Image from 'next/image';
import catPizzaImage from '../images/cat.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Restoran4ik</title>
        <meta name="description" content="Welcome to Restoran4ik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex-grow relative">
          <Image src={catPizzaImage} layout="fill" objectFit="cover" alt="Cat with pizza" className="absolute" />
        </div>

        <div className="absolute inset-0 top-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4 sm:p-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">Welcome to Restoran4ik!</h1>
          <a href="/meals" className="text-lg sm:text-xl bg-orange-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-orange-700">
            Explore menu
          </a>
        </div>
      </main>
    </div>
  );
}
