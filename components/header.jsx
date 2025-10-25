import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <header className="bg-[#4D9AA7] text-white py-4 px-6">
            <div className="flex items-center gap-2">
                <h1 className="text-4xl font-bold ">cloverhi</h1>
                <Image
                    src="/clover.svg"
                    alt="Clover Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                />
            </div>
        </header>
    );
}
