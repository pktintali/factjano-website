// A header code
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="https://factjano.com/assets/factjano_logo.png"
            alt="FactJano Logo"
            width={50}
            height={50}
            className="mr-2"
          />
        </Link>
        <Link href="/">
          <h1 className="text-4xl font-bold">
            Fact<span className="text-blue-500">Jano</span>
          </h1>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M12 16v-8" />
              <path d="M12 16l-3-3m3 3l3-3" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.46 5.5C21.69 5.84 20.87 6.05 20 6.13C20.89 5.59 21.57 4.74 21.88 3.74C21.05 4.27 20.12 4.65 19.13 4.87C18.34 4.04 17.23 3.5 16 3.5C13.79 3.5 12 5.29 12 7.5C12 7.78 12.03 8.05 12.08 8.32C8.19 8.15 4.62 6.1 2.37 3C1.77 4 1.5 5.14 1.5 6.35C1.5 8.26 2.74 9.93 4.46 10.62C3.71 10.82 2.92 10.92 2.11 10.92C1.87 10.92 1.63 10.9 1.39 10.86C1.88 12.02 2.94 12.92 4.13 12.95C3.18 13.7 2.5 14.86 2.5 16.21V16.5C3.67 16.5 4.71 16.12 5.59 15.5C5.91 15.86 6.31 16.16 6.77 16.39C6.08 16.36 5.39 16.15 4.77 15.79C5.37 15.78 5.95 15.56 6.46 15.18C5.8 15.17 5.16 14.97 4.59 14.62C4.59 14.62 4.59 14.62 4.59 14.63C4.59 16.26 5.77 17.59 7.37 17.92C6.92 18.05 6.45 18.12 5.96 18.12C5.74 18.12 5.52 18.1 5.31 18.06C5.75 19.14 6.74 19.92 7.87 19.92C7.09 20.61 6.09 21.02 5.04 21.02C4.76 21.02 4.49 21 4.22 20.96C5.36 21.68 6.71 22.06 8.13 22.06C16 22.06 20.5 15.5 20.5 9C20.5 8.79 20.5 8.58 20.48 8.37C21.29 7.73 22 6.89 22.46 5.91L22.46 5.5Z" />
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
