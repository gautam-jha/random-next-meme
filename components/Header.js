import Link from 'next/link';

const links = [
    { href: '/', label: 'Next.Memes!' },
    { href: '/about', label: 'About' }
    // { href: 'https://github.com/gautam-jha/random-next-meme', label: 'GitHub' }
];

function Header() {
    return (
        <nav className="text-center sticky top-0 z-50 bg-white shadow-lg">
            <ul className="flex justify-between px-4 py-1">
                <li className="flex px-2 py-1">
                    <Link href="/">
                        <a className="text-black-500	no-underline text-sm">Home</a>
                    </Link>
                </li>
                {links.map(({ href, label }) => (
                    <li key={href} className="flex px-2 py-1">
                        <a className="text-black-500	no-underline text-sm" href={href}>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Header;
