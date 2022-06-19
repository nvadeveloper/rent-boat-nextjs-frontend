import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            {/* <div className="bg-gray-50 mt-20 py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm">RENTBOAT 2022. ALL RIGHTS RESERVED.</p>
                </div>
            </div> */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8  mt-12">
                <div className="border-t flex justify-between py-10 items-center">
                    <Link href="/">
                        <a className="font-bold text-2xl text-blue-600 ">Rent Boat</a>
                    </Link>
                    <span className='text-sm text-gray-600'>RENTBOAT 2022. ALL RIGHTS RESERVED.</span>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
