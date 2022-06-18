import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { BsArrowRightShort } from 'react-icons/bs';

const array = [
    {
        title: 'Аренда Катра',
        href: '/boats',
    },
    {
        title: 'Аренда Яхты',
        href: '/yachts',
    },
    {
        title: 'Аренда Тепдохода',
        href: '/ships',
    },
    {
        title: 'Сапбординг',
        href: '/ships',
    },
];
const Navigation = () => {
    return (
        <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {array.map((item, key) => (
                    <li key={key}>
                        <Link href={item.href}>
                            <a>
                                <div className="rounded-xl shadow hover:shadow-lg ease-in-out duration-500">
                                    <img
                                        className="rounded-t-xl object-cover w-full h-64 sm:h-80"
                                        src="https://jets.ru/upload/iblock/e32/hw35vo1a5spnd429wuupzxr6qgt6l8io/Princess_Yachts_Y85_Preview_36.jpg"
                                        alt={item.title}
                                    />

                                    <div className="px-6 py-8">
                                        <p className="text-2xl font-bold tracking-tight text-gray-900">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Navigation;
