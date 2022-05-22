import Link from "next/link"

const Navigation = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <Link href='/boats'>
                    <a>
                        <div className="rounded-2xl p-6 bg-gradient-to-r from-cyan-100 to-blue-100 h-72 hover:shadow-md ease-in-out duration-300">
                            <p className="text-3xl font-extrabold font-montserrat">Аренда Катра</p>
                        </div>
                    </a>
                </Link>
                <Link href='/yachts'>
                    <a>
                        <div className="rounded-2xl p-6 bg-gradient-to-r from-cyan-100 to-blue-100 h-72 hover:shadow-md ease-in-out duration-300">
                            <p className="text-3xl font-extrabold font-montserrat">Аренда Яхты</p>
                        </div>
                    </a>
                </Link>
                <Link href='/ships'>
                    <a>
                        <div className="rounded-2xl p-6 bg-gradient-to-r from-cyan-100 to-blue-100 h-72 hover:shadow-md ease-in-out duration-300">
                            <p className="text-3xl font-extrabold font-montserrat">Аренда Тепдохода</p>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Navigation