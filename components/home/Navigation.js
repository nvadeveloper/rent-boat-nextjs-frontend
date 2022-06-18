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
                {array.map((item, i) => (
                    <li key={i}>
                        <Link href={item.href}>
                            <a>
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                                    <img
                                        className="rounded-t-xl object-cover w-full h-64 sm:h-80"
                                        src="https://jets.ru/upload/iblock/e32/hw35vo1a5spnd429wuupzxr6qgt6l8io/Princess_Yachts_Y85_Preview_36.jpg"
                                        alt={item.title}
                                    />
                                    <div className="p-5">
                                        <p className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                                            {item.title}
                                        </p>

                                        <button className="bg-blue-600 px-6 py-3 rounded-full text-white hover:opacity-80 flex items-center">
                                            <span>К поиску</span>
                                            <FiChevronRight className="h-5 w-5" />
                                        </button>
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
