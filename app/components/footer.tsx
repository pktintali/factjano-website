import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center gap-5">
                <p className="text-center">&copy; TDevelopers 2023</p>
                <Link href='/privacy-policy' className="underline">Privacy & Policy</Link>
        </footer>
    );
}