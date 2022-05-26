import Link from 'next/link';

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
];
const Navigation = () => {
    return (
        <>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {array.map((item, i) => (
                <li key={i}>
                    <Link href={item.href}>
                        <a className="rounded-2xl p-6 bg-gradient-to-r from-cyan-100 to-blue-100 h-72 hover:shadow-md ease-in-out duration-300 text-3xl font-extrabold font-montserrat">
                            {item.title}
                        </a>
                    </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Navigation;
