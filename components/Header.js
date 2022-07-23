import Link from 'next/link';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    const onToggleMobileMenu = () => {
        setMobileMenuIsOpen((status) => {
            if (status) {
                document.body.style.overflow = 'auto';
            } else {
                document.body.style.overflow = 'hidden';
            }
            return !status;
        });
    };

    const menuItems = [
        {
            title: 'Главная',
            href: '/',
        },
        {
            title: 'Теплоходы',
            href: '/ships',
        },
        {
            title: 'Катера',
            href: '/boats',
        },
        {
            title: 'Яхты',
            href: '/yachts',
        },
        {
            title: 'О нас',
            href: '/about',
        },
    ];

    return (
        <header>
            <div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                    <div>
                        <Link href="/">
                            <a className="font-bold text-2xl text-blue-600">RentBoat</a>
                        </Link>
                    </div>

                    <ul className="space-x-2 hidden md:flex">
                        {menuItems.map((item, key) => (
                            <li key={key}>
                                <Link href={item.href}>
                                    <a className="rounded-full py-3 px-4 hover:bg-gray-100 ease-in-out duration-200">
                                        {item.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="h-10 w-6 rounded-full justify-center items-center group md:hidden"
                        onClick={onToggleMobileMenu}>
                        <FiMenu className="w-6 h-6 text-gray-900 hover:text-gray-700" />
                    </button>

                    <div
                        className={
                            'fixed inset-0 w-full h-full md:hidden z-20 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg-gray-400' +
                            (mobileMenuIsOpen ? ' flex' : ' hidden')
                        }
                        onClick={onToggleMobileMenu}>
                        <ul className="fixed flex flex-col md:hidden bg-white w-80 top-5 right-5 rounded-xl py-6 px-4 space-y-4">
                            {menuItems.map((item, key) => (
                                <li key={key}>
                                    <Link href={item.href}>
                                        <a className="text-xl px-4 hover:text-gray-500 font-bold">
                                            {item.title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <IoIosClose className="fixed top-10 right-10 h-8 w-8 text-gray-500" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
