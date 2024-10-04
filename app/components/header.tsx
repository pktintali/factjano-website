/* eslint-disable @next/next/no-img-element */
// A header code
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="pb-6 py-2 px-6 sm:px-64 sm:py-6 flex items-center justify-between relative">
      <Link href="/">
        <div className="flex items-center">
          <Image
            src="/factjano_logo_v2.png"
            alt="FactJano Logo"
            width={70}
            height={70}
            className="-ml-3 animate-pulse"
          />
          <h1 className="text-4xl font-bold ">
            Fact<span className="text-blue-500">Jano</span>
          </h1>
        </div>
      </Link>

      <a
        className="hidden md:block"
        href="https://www.producthunt.com/posts/factjano-fun-easy-learning?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-factjano&#0045;fun&#0045;easy&#0045;learning"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=492871&theme=light"
          alt="FactJano&#0058;&#0032;Fun&#0032;&#0038;&#0032;Easy&#0032;Learning - AI&#0032;powered&#0032;simple&#0032;and&#0032;beautiful&#0032;micro&#0032;learning&#0032;app | Product Hunt"
          width="250"
          height="54"
        />
      </a>

      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="https://twitter.com/factjano" target="_blank">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
