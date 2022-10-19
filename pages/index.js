import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google-Clone</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" />
      </Head>

      {/*Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/*Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/*Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/*Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://lh5.googleusercontent.com/-w6-L0t4myp4/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJNgdzaPGVs4BjL1ZFChdGY8LEakvw/c/photo.jpg?height=180&width=180" />
        </div>
      </header>

      {/*Body */}
      <form className="flex flex-col items-center mt-6 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />

        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md
        rounded-full border border-gray-200 px-5 py-2 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon onClick={search} className="h-5 mr-3 text-gray-500 cursor-pointer" />
          <input
            ref={searchInputRef}
            className="focus:outline-none flex-grow "
            type="text"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div
          className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
        sm:flex-row sm:space-x-4"
        >
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/*Footer */}
      <Footer />
    </div>
  );
}
