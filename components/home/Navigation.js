import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

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
                        <div className="rounded-xl border-[1px] border-gray-200">
                            <img
                                className="rounded-t-xl object-cover w-full h-64 sm:h-80"
                                src="https://jets.ru/upload/iblock/e32/hw35vo1a5spnd429wuupzxr6qgt6l8io/Princess_Yachts_Y85_Preview_36.jpg"
                                alt={item.title}
                            />

                            <div className="p-5">
                                <Link href={item.href}>
                                    <a>
                                        <p className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                                            {item.title}
                                        </p>

                                        <button className="px-6 py-3 rounded-xl text-white flex items-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                                            <span>К поиску</span>
                                            <FiChevronRight className="h-6 w-6" />
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Navigation;
