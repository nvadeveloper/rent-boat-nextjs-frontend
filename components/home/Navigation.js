import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

const Menu = [
    {
        title: "Аренда Катра",
        href: "/boats",
    },
    {
        title: "Аренда Яхты",
        href: "/boats",
    },
    {
        title: "Аренда Тепдохода",
        href: "/boats",
    },
    {
        title: "Сапбординг",
        href: "/boats",
    },
];
const Navigation = () => {
    return (
        <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {Menu.map((item, key) => (
                    <li key={key}>
                        <Link href={item.href}>
                            <a>
                                <div className="rounded-xl shadow hover:shadow-lg ease-in-out duration-500">
                                    <div className="relative w-full h-64 sm:h-80">
                                        <Image
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-xl"
                                            alt="Rent Boat Image"
                                            src="https://jets.ru/upload/iblock/e32/hw35vo1a5spnd429wuupzxr6qgt6l8io/Princess_Yachts_Y85_Preview_36.jpg"
                                            quality={50}
                                            priority
                                        />
                                    </div>

                                    <div className="px-6 py-8">
                                        <p className="text-2xl font-bold tracking-tight text-gray-900">
                                            {item.title}
                                        </p>
                                        <button className="flex items-center text-blue-600 mt-8 hover:text-cyan-600">
                                            <span>Перейти к поиску</span>
                                            <BsArrowRightShort className="w-6 h-6" />
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
