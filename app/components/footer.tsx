import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center gap-5 p-5">
      <p className="text-center">&copy; TDevelopers 2024</p>
      <Link href="/privacy-policy" className="underline">
        Privacy & Policy
      </Link>
      <Link href="/terms-of-use" className="underline">
        Terms of Use
      </Link>
    </footer>
  );
}
