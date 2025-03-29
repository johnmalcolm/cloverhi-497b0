import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#4D9AA7] text-white py-4 px-6">
      <p className="text-xs">&copy; {new Date().getFullYear()} Cloverhi. All rights reserved.</p>
    </footer>
    );
}
