import Link from "next/link"
import { useState } from "react"



const Header = () => {

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    const onToggleMobileMenu = () => {
        setMobileMenuIsOpen((status) => {
            if (status) {
                document.body.style.overflow = 'auto'
            } else {
                document.body.style.overflow = 'hidden'
            }
            return !status
        })
    }

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
    ]

    const menuLine = `h-[2px] w-6 my-[4px] rounded-full bg-black transition ease transform duration-300`

    return (
        <header>
            <div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                    <div>
                        <Link href='/'>
                            <a className="font-bold text-2xl text-blue-600">Rent Boat</a>
                        </Link>
                    </div>

                    <div className="space-x-3 hidden md:flex">
                        {menuItems.map((item, key) => (
                            <Link href={item.href} key={key}>
                                <a className='rounded-xl py-3 px-4 hover:bg-gray-100'>{item.title}</a>
                            </Link>
                        ))}

                        <div className='rounded-xl py-3 px-4 hover:bg-gray-100 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 22 22" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                    </div>

                    <button
                        className="z-30 h-10 w-6 rounded-xl justify-center items-center group md:hidden"
                        onClick={onToggleMobileMenu}
                    >
                        <div className={`${menuLine} ${mobileMenuIsOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                        <div className={`${menuLine} ${mobileMenuIsOpen ? "opacity-0" : ""}`} />
                        <div className={`${menuLine} ${mobileMenuIsOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
                    </button>

                    <div
                        className={'fixed top-0 left-0 w-full h-full z-20 bg-white md:hidden' + (mobileMenuIsOpen ? " flex" : " hidden")}
                        onClick={onToggleMobileMenu}
                    >
                        <div className="w-full space-y-3 flex flex-col md:hidden text-center py-36" >
                            {menuItems.map((item, key) => (
                                <Link href={item.href} key={key}>
                                    <a className='text-3xl px-4 hover:text-gray-500 font-black font-montserrat'>{item.title}</a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header


