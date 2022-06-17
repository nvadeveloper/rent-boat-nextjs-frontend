import Link from 'next/link';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

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

    const menuLine = `h-[2px] w-6 my-[4px] rounded-full bg-black transition ease transform duration-300`;

    return (
        <header>
            <div className="absolute  top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
                <img src="https://lukcode.com/static/images/apla.png" />
            </div>

            <div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                    <div>
                        <Link href="/">
                            <a className="font-bold text-2xl text-blue-600">Rent Boat</a>
                        </Link>
                    </div>

                    <ul className="space-x-3 hidden md:flex">
                        {menuItems.map((item, key) => (
                            <li key={key}>
                                <Link href={item.href}>
                                    <a className="rounded-xl py-3 px-4 hover:bg-gray-100 ease-in-out duration-200">
                                        {item.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="h-10 w-6 rounded-xl justify-center items-center group md:hidden"
                        onClick={onToggleMobileMenu}>
                        <div
                            className={`${menuLine} ${
                                mobileMenuIsOpen ? 'rotate-45 translate-y-[6px]' : ''
                            }`}
                        />
                        <div className={`${menuLine} ${mobileMenuIsOpen ? 'opacity-0' : ''}`} />
                        <div
                            className={`${menuLine} ${
                                mobileMenuIsOpen ? '-rotate-45 -translate-y-[6px]' : ''
                            }`}
                        />
                    </button>

                    <div
                        className={
                            'fixed inset-0 w-full h-full md:hidden z-20 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg-gray-400' +
                            (mobileMenuIsOpen ? ' flex' : ' hidden')
                        }
                        onClick={onToggleMobileMenu}>
                        <ul className="space-y-4 flex flex-col md:hidden bg-white w-80 top-5 right-5 fixed rounded-xl py-6 px-4">
                            {menuItems.map((item, key) => (
                                <li key={key}>
                                    <Link href={item.href}>
                                        <a className="text-xl px-4 hover:text-gray-500 font-bold font-montserrat">
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
