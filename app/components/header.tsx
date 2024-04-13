// A header code
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="pb-14 py-2 px-4 sm:px-16 sm:py-6 flex items-center justify-between">
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
