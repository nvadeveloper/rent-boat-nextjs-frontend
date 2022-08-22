import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex justify-between py-6 sm:py-10 items-center">
                {/* border-t */}
                    <Link href="/">
                        <a className="font-bold text-2xl text-blue-600 ">RentBoat</a>
                    </Link>
                    <span className='text-sm text-gray-600'>All rights reserved. 2022</span>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
